import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const {
    name,
    email,
    phone,
    company,
    websiteType,
    budget,
    timeline,
    features,
    description,
    hasLogo,
    hasDomain,
    referenceWebsites,
  } = req.body;

  // Create email content
  const emailContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center; }
    .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
    .section { background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
    .section-title { color: #667eea; font-size: 18px; font-weight: bold; margin-bottom: 15px; border-bottom: 2px solid #667eea; padding-bottom: 5px; }
    .field { margin-bottom: 12px; }
    .label { font-weight: bold; color: #555; }
    .value { color: #333; }
    .features-list { display: flex; flex-wrap: wrap; gap: 8px; }
    .feature-tag { background: #e0e7ff; color: #4338ca; padding: 5px 12px; border-radius: 20px; font-size: 14px; }
    .footer { text-align: center; margin-top: 20px; color: #888; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🚀 Шинэ вебсайт захиалга!</h1>
      <p>Шинэ үйлчлүүлэгчээс захиалга ирлээ</p>
    </div>
    <div class="content">
      <div class="section">
        <div class="section-title">👤 Үйлчлүүлэгчийн мэдээлэл</div>
        <div class="field"><span class="label">Нэр:</span> <span class="value">${name}</span></div>
        <div class="field"><span class="label">Имэйл:</span> <span class="value">${email}</span></div>
        <div class="field"><span class="label">Утас:</span> <span class="value">${phone}</span></div>
        <div class="field"><span class="label">Байгууллага:</span> <span class="value">${company || 'Тодорхойгүй'}</span></div>
      </div>
      
      <div class="section">
        <div class="section-title">📋 Төслийн мэдээлэл</div>
        <div class="field"><span class="label">Вебсайтын төрөл:</span> <span class="value">${websiteType}</span></div>
        <div class="field"><span class="label">Төсөв:</span> <span class="value">${budget}</span></div>
        <div class="field"><span class="label">Хугацаа:</span> <span class="value">${timeline}</span></div>
        <div class="field"><span class="label">Лого байгаа эсэх:</span> <span class="value">${hasLogo || 'Тодорхойгүй'}</span></div>
        <div class="field"><span class="label">Домэйн байгаа эсэх:</span> <span class="value">${hasDomain || 'Тодорхойгүй'}</span></div>
      </div>

      <div class="section">
        <div class="section-title">⚡ Шаардлагатай функцүүд</div>
        <div class="features-list">
          ${features.length > 0 
            ? features.map(f => `<span class="feature-tag">${f}</span>`).join('') 
            : '<span class="value">Сонгоогүй</span>'}
        </div>
      </div>

      <div class="section">
        <div class="section-title">📝 Нэмэлт мэдээлэл</div>
        <div class="field"><span class="label">Жишээ вебсайтууд:</span> <span class="value">${referenceWebsites || 'Тодорхойгүй'}</span></div>
        <div class="field"><span class="label">Дэлгэрэнгүй тайлбар:</span></div>
        <div class="value" style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin-top: 8px;">${description}</div>
      </div>
    </div>
    <div class="footer">
      <p>Энэ мэйл автоматаар илгээгдсэн болно.</p>
      <p>© 2026 Web Development</p>
    </div>
  </div>
</body>
</html>
  `;

  // Plain text version
  const textContent = `
Шинэ вебсайт захиалга!

ҮЙЛЧЛҮҮЛЭГЧИЙН МЭДЭЭЛЭЛ
------------------------
Нэр: ${name}
Имэйл: ${email}
Утас: ${phone}
Байгууллага: ${company || 'Тодорхойгүй'}

ТӨСЛИЙН МЭДЭЭЛЭЛ
----------------
Вебсайтын төрөл: ${websiteType}
Төсөв: ${budget}
Хугацаа: ${timeline}
Лого байгаа эсэх: ${hasLogo || 'Тодорхойгүй'}
Домэйн байгаа эсэх: ${hasDomain || 'Тодорхойгүй'}

ШААРДЛАГАТАЙ ФУНКЦҮҮД
---------------------
${features.length > 0 ? features.join(', ') : 'Сонгоогүй'}

НЭМЭЛТ МЭДЭЭЛЭЛ
---------------
Жишээ вебсайтууд: ${referenceWebsites || 'Тодорхойгүй'}

Дэлгэрэнгүй тайлбар:
${description}
  `;

  try {
    // Configure nodemailer transporter
    // For production, use environment variables
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"Вебсайт Захиалга" <${process.env.EMAIL_USER}>`,
      to: 'tamiraatami7777@gmail.com',
      replyTo: email,
      subject: `🚀 Шинэ захиалга: ${name} - ${websiteType}`,
      text: textContent,
      html: emailContent,
    });

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ message: 'Failed to send email', error: error.message });
  }
}
