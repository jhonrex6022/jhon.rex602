<?php
// Debug log function
function debug_log($msg) {
    file_put_contents(__DIR__ . '/contact_debug.log', date('Y-m-d H:i:s') . ' ' . $msg . "\n", FILE_APPEND);
}

debug_log('=== NEW REQUEST ===');

// Load PHPMailer with error handling
try {
    $phpmailerPath = __DIR__ . '/PHPMailer/src/';
    
    if (!file_exists($phpmailerPath . 'Exception.php')) {
        debug_log('PHPMailer Exception.php not found at: ' . $phpmailerPath);
        throw new Exception('PHPMailer files not found.');
    }
    
    require_once $phpmailerPath . 'Exception.php';
    require_once $phpmailerPath . 'PHPMailer.php';
    require_once $phpmailerPath . 'SMTP.php';
    
    debug_log('PHPMailer files loaded successfully');
} catch (Exception $e) {
    debug_log('Failed to load PHPMailer: ' . $e->getMessage());
    header('Content-Type: application/json');
    echo json_encode(['success' => false, 'message' => 'Server configuration error. Please contact the administrator.']);
    exit;
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header('Content-Type: application/json');


if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    debug_log('Invalid request method: ' . $_SERVER['REQUEST_METHOD']);
    echo json_encode(['success' => false, 'message' => 'Invalid request method.']);
    exit;
}

debug_log('Request method: POST');

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$message = trim($_POST['message'] ?? '');

debug_log('Form data - Name: ' . $name . ', Email: ' . $email . ', Message length: ' . strlen($message));



if (!$name || !$email || !$message) {
    debug_log('Missing fields: name=' . $name . ', email=' . $email . ', message=' . $message);
    echo json_encode(['success' => false, 'message' => 'All fields are required.']);
    exit;
}


if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    debug_log('Invalid email: ' . $email);
    echo json_encode(['success' => false, 'message' => 'Invalid email address.']);
    exit;
}

// SMTP settings
try {
    debug_log('Starting PHPMailer configuration');
    
    if (!class_exists('PHPMailer\\PHPMailer\\PHPMailer')) {
        debug_log('ERROR: PHPMailer class not found');
        throw new Exception('PHPMailer not loaded.');
    }
    
    debug_log('PHPMailer class exists, creating instance');
    $mail = new PHPMailer(true);
    
    // Enable verbose debugging for troubleshooting
    $mail->SMTPDebug = 0; // Set to 2 to see detailed SMTP debug output
    $mail->Debugoutput = function($str, $level) {
        debug_log("SMTP Debug [$level]: $str");
    };

    debug_log('Configuring SMTP settings');
    // Server settings
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'jhonrex.rivera.benavente@gmail.com';
    $mail->Password = 'iada mbki shvq cmne';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;
    $mail->Timeout = 30; // Increase timeout to 30 seconds

    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        )
    );

    debug_log('Setting email addresses');
    $mail->setFrom('jhonrex.rivera.benavente@gmail.com', 'Portfolio Contact Form');
    $mail->addAddress('jhonrex.rivera.benavente@gmail.com', 'Jhon Rex Benavente');
    $mail->addReplyTo($email, $name);

    debug_log('Setting email content');
    $mail->isHTML(true);
    $mail->Subject = 'New Contact Form Message from ' . $name;
    $mail->Body = "<h2>New Contact Form Submission</h2><p><strong>Name:</strong> " . htmlspecialchars($name) . "</p><p><strong>Email:</strong> " . htmlspecialchars($email) . "</p><p><strong>Message:</strong></p><p>" . nl2br(htmlspecialchars($message)) . "</p>";
    $mail->AltBody = "Name: $name\nEmail: $email\nMessage:\n$message";

    debug_log('Attempting to send email');
    $result = $mail->send();
    debug_log('PHPMailer send result: ' . ($result ? 'SUCCESS' : 'FAIL') . ' | ErrorInfo: ' . $mail->ErrorInfo);
    
    if ($result) {
        debug_log('Email sent successfully');
        echo json_encode(['success' => true, 'message' => 'Message sent successfully! I will get back to you soon.']);
    } else {
        debug_log('Email send failed: ' . $mail->ErrorInfo);
        throw new Exception('Mailer error: ' . $mail->ErrorInfo);
    }
} catch (Exception $e) {
    debug_log('EXCEPTION CAUGHT: ' . $e->getMessage());
    debug_log('Exception trace: ' . $e->getTraceAsString());
    error_log('Contact form error: ' . $e->getMessage());
    
    $userMessage = 'Failed to send message. Please try again later.';
    
    // More specific error messages for debugging
    if (strpos($e->getMessage(), 'PHPMailer not loaded') !== false) {
        $userMessage = 'Server error: Email service not configured.';
    } elseif (strpos($e->getMessage(), 'SMTP') !== false) {
        $userMessage = 'Failed to connect to email server. Please try again.';
        debug_log('SMTP connection error detected');
    } elseif (strpos($e->getMessage(), 'authenticate') !== false) {
        $userMessage = 'Email authentication failed. Please contact administrator.';
        debug_log('SMTP authentication error detected');
    }
    
    echo json_encode(['success' => false, 'message' => $userMessage, 'debug' => $e->getMessage()]);
}
?>
