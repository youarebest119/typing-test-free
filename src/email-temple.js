export const template = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Typing Test Result</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: 'Segoe UI', sans-serif;
      background: #f4f4f8;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .result-card {
      background: white;
      padding: 2rem;
      border-radius: 16px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
      max-width: 400px;
      width: 100%;
      text-align: center;
      animation: pop 0.4s ease;
    }

    @keyframes pop {
      from { transform: scale(0.95); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }

    .result-card h2 {
      margin-bottom: 1rem;
      font-size: 1.8rem;
      color: #333;
    }

    .stat {
      display: flex;
      justify-content: space-between;
      margin: 0.5rem 0;
      font-size: 1rem;
      color: #555;
    }

    .stat span {
      font-weight: 600;
      color: #111;
    }

    .level-badge {
      display: inline-block;
      margin-top: 1rem;
      padding: 0.4rem 1rem;
      border-radius: 999px;
      background: #4f46e5;
      color: white;
      font-weight: bold;
      font-size: 0.9rem;
      letter-spacing: 1px;
    }

    .footer {
      margin-top: 1.5rem;
      font-size: 0.8rem;
      color: #999;
    }
  </style>
</head>
<body>
  <div class="result-card">
    <h2>Typing Test Result</h2>

    <div class="stat">
      Accuracy: <span>97%</span>
    </div>
    <div class="stat">
      Speed: <span>78 WPM</span>
    </div>
    <div class="stat">
      Correct Words: <span>130</span>
    </div>
    <div class="stat">
      Total Words Written: <span>135</span>
    </div>
    <div class="stat">
      Duration: <span>60 seconds</span>
    </div>

    <div class="level-badge">Advanced</div>

    <div class="footer">Keep typing and improve your skills 💪</div>
  </div>
</body>
</html>

`