import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const data = req.body;

  // Helper function to get array as text
  const getArrayText = (arr, labels = {}) => {
    if (!arr || arr.length === 0) return 'Сонгоогүй';
    return arr.map(item => labels[item] || item).join(', ');
  };

  // Label mappings
  const websiteTypeLabels = {
    business: 'Бизнесийн вебсайт',
    ecommerce: 'И-коммерс / Онлайн дэлгүүр',
    portfolio: 'Портфолио',
    blog: 'Блог / Мэдээллийн',
    landing: 'Landing Page',
    webapp: 'Веб апликейшн',
    other: 'Бусад',
  };

  const designStyleLabels = {
    modern: 'Орчин үеийн / Минимал',
    classic: 'Классик / Албан ёсны',
    creative: 'Бүтээлч / Өнгөлөг',
    dark: 'Dark theme',
    corporate: 'Корпорат',
  };

  const timelineLabels = {
    urgent: '1-2 долоо хоног (Яаралтай)',
    normal: '2-4 долоо хоног',
    relaxed: '1-2 сар',
    flexible: 'Уян хатан',
  };

  const budgetLabels = {
    small: '500,000₮ - 1,000,000₮',
    medium: '1,000,000₮ - 3,000,000₮',
    large: '3,000,000₮ - 5,000,000₮',
    enterprise: '5,000,000₮+',
    discuss: 'Ярилцъя',
  };

  const featureLabels = {
    responsive: 'Responsive дизайн',
    seo: 'SEO оптимизаци',
    analytics: 'Аналитик',
    contact: 'Холбоо барих форм',
    blog: 'Блог систем',
    payment: 'Төлбөрийн систем',
    admin: 'Админ панел',
    chat: 'Live чат',
    newsletter: 'Мэдээллийн товхимол',
    social: 'Сошиал медиа холболт',
    multilang: 'Олон хэлний дэмжлэг',
    booking: 'Захиалгын систем',
  };

  const productInfoLabels = {
    price: 'Үнэ',
    images: 'Зураг',
    size: 'Размер',
    color: 'Өнгө',
    description: 'Тайлбар',
    sku: 'SKU код',
    weight: 'Жин',
    brand: 'Брэнд',
  };

  const userFeatureLabels = {
    register: 'Бүртгүүлэх',
    login: 'Нэвтрэх',
    guest: 'Guest-ээр захиалах',
    profile: 'Профайл засах',
    orderHistory: 'Захиалгын түүх',
    socialLogin: 'Social login',
  };

  const filterLabels = {
    price: 'Үнээр шүүх',
    category: 'Категориор',
    size: 'Размераар',
    color: 'Өнгөөр',
    brand: 'Брэндээр',
    rating: 'Үнэлгээгээр',
  };

  const paymentLabels = {
    qpay: 'QPay',
    transfer: 'Банк шилжүүлэг',
  };

  const deliveryLabels = {
    city: 'Хот дотор',
    countryside: 'Орон нутаг',
    pickup: 'Өөрөө авах',
    express: 'Яаралтай хүргэлт',
  };

  const orderStatusLabels = {
    pending: 'Pending (Хүлээгдэж буй)',
    paid: 'Paid (Төлөгдсөн)',
    processing: 'Processing (Бэлтгэж буй)',
    shipped: 'Shipped (Илгээсэн)',
    delivered: 'Delivered (Хүргэгдсэн)',
    cancelled: 'Cancelled (Цуцлагдсан)',
  };

  const notificationLabels = {
    sms: 'SMS',
    email: 'Email',
    push: 'Push notification',
  };

  const adminFeatureLabels = {
    addProduct: 'Бараа нэмэх',
    editProduct: 'Бараа засах',
    deleteProduct: 'Бараа устгах',
    manageCategory: 'Категори удирдах',
    viewOrders: 'Захиалга харах',
    changeOrderStatus: 'Захиалгын статус солих',
    reports: 'Тайлан харах',
    discount: 'Хямдрал тохируулах',
  };

  const adminManagesLabels = {
    users: 'Хэрэглэгч',
    content: 'Контент',
    orders: 'Захиалга',
    products: 'Бараа',
    settings: 'Тохиргоо',
  };

  const functionalLabels = {
    register: 'Бүртгүүлэх',
    login: 'Нэвтрэх',
    editProfile: 'Профайл засах',
    search: 'Хайлт',
    filter: 'Шүүлтүүр',
    comments: 'Сэтгэгдэл',
    reviews: 'Review / Үнэлгээ',
    like: 'Like',
    fileUpload: 'Файл upload',
  };

  const languageLabels = {
    mn: '🇲🇳 Монгол',
    en: '🇺🇸 English',
    ru: '🇷🇺 Русский',
    cn: '🇨🇳 中文',
    kr: '🇰🇷 한국어',
  };

  const isEcommerce = data.websiteType === 'ecommerce';

  // Build E-commerce specific HTML sections
  let ecommerceHTML = '';
  let ecommerceText = '';

  if (isEcommerce) {
    ecommerceHTML = `
      <div class="section">
        <div class="section-title">🛍️ Категори & Барааны мэдээлэл</div>
        <div class="field"><span class="label">Жишээ сайт:</span> <span class="value">${data.exampleSite || 'Тодорхойгүй'}</span></div>
        <div class="field"><span class="label">Категориуд:</span> <span class="value">${data.categories || 'Тодорхойгүй'}</span></div>
        <div class="field"><span class="label">Sub-category:</span> <span class="value">${data.hasSubCategory || 'Тодорхойгүй'}</span></div>
        ${data.hasSubCategory === 'Тийм' ? `<div class="field"><span class="label">Sub-category жишээ:</span> <span class="value">${data.subCategoryExample || 'Тодорхойгүй'}</span></div>` : ''}
        <div class="field"><span class="label">Барааны мэдээлэл:</span></div>
        <div class="features-container">
          ${data.productInfo?.length > 0 
            ? data.productInfo.map(f => `<span class="feature-tag">${productInfoLabels[f] || f}</span>`).join('') 
            : '<span class="value">Сонгоогүй</span>'}
        </div>
        <div class="field" style="margin-top:15px"><span class="label">Зургийн тоо:</span> <span class="value">${data.imageCount || 'Тодорхойгүй'}</span></div>
        <div class="field"><span class="label">Stock хяналт:</span> <span class="value">${data.hasStock || 'Тодорхойгүй'}</span></div>
      </div>

      <div class="section">
        <div class="section-title">👤 Хэрэглэгч & Хайлт</div>
        <div class="field"><span class="label">Хэрэглэгчийн функц:</span></div>
        <div class="features-container">
          ${data.userFeatures?.length > 0 
            ? data.userFeatures.map(f => `<span class="feature-tag">${userFeatureLabels[f] || f}</span>`).join('') 
            : '<span class="value">Сонгоогүй</span>'}
        </div>
        <div class="field" style="margin-top:15px"><span class="label">Хайлт:</span> <span class="value">${data.hasSearch || 'Тодорхойгүй'}</span></div>
        <div class="field"><span class="label">Шүүлтүүр:</span></div>
        <div class="features-container">
          ${data.filterOptions?.length > 0 
            ? data.filterOptions.map(f => `<span class="feature-tag">${filterLabels[f] || f}</span>`).join('') 
            : '<span class="value">Сонгоогүй</span>'}
        </div>
        <div class="field" style="margin-top:15px"><span class="label">Wishlist:</span> <span class="value">${data.hasWishlist || 'Тодорхойгүй'}</span></div>
      </div>

      <div class="section">
        <div class="section-title">💳 Захиалга & Төлбөр & Хүргэлт</div>
        <div class="field"><span class="label">Cart (сагс):</span> <span class="value">${data.hasCart || 'Тодорхойгүй'}</span></div>
        <div class="field"><span class="label">Төлбөрийн хэлбэр:</span></div>
        <div class="features-container">
          ${data.paymentMethods?.length > 0 
            ? data.paymentMethods.map(f => `<span class="feature-tag">${paymentLabels[f] || f}</span>`).join('') 
            : '<span class="value">Сонгоогүй</span>'}
        </div>
        <div class="field" style="margin-top:15px"><span class="label">Хүргэлт:</span></div>
        <div class="features-container">
          ${data.deliveryOptions?.length > 0 
            ? data.deliveryOptions.map(f => `<span class="feature-tag">${deliveryLabels[f] || f}</span>`).join('') 
            : '<span class="value">Сонгоогүй</span>'}
        </div>
        <div class="field" style="margin-top:15px"><span class="label">Захиалгын статус:</span></div>
        <div class="features-container">
          ${data.orderStatuses?.length > 0 
            ? data.orderStatuses.map(f => `<span class="feature-tag">${orderStatusLabels[f] || f}</span>`).join('') 
            : '<span class="value">Сонгоогүй</span>'}
        </div>
        <div class="field" style="margin-top:15px"><span class="label">Мэдэгдэл:</span></div>
        <div class="features-container">
          ${data.orderNotifications?.length > 0 
            ? data.orderNotifications.map(f => `<span class="feature-tag">${notificationLabels[f] || f}</span>`).join('') 
            : '<span class="value">Сонгоогүй</span>'}
        </div>
      </div>

      <div class="section">
        <div class="section-title">⚙️ Admin Panel</div>
        <div class="field"><span class="label">Admin функц:</span></div>
        <div class="features-container">
          ${data.adminFeatures?.length > 0 
            ? data.adminFeatures.map(f => `<span class="feature-tag">${adminFeatureLabels[f] || f}</span>`).join('') 
            : '<span class="value">Сонгоогүй</span>'}
        </div>
        <div class="field" style="margin-top:15px"><span class="label">Admin тоо:</span> <span class="value">${data.adminCount || 'Тодорхойгүй'}</span></div>
        <div class="field"><span class="label">Admin удирдах:</span></div>
        <div class="features-container">
          ${data.adminManages?.length > 0 
            ? data.adminManages.map(f => `<span class="feature-tag">${adminManagesLabels[f] || f}</span>`).join('') 
            : '<span class="value">Сонгоогүй</span>'}
        </div>
        <div class="field" style="margin-top:15px"><span class="label">Функциональ шаардлага:</span></div>
        <div class="features-container">
          ${data.functionalFeatures?.length > 0 
            ? data.functionalFeatures.map(f => `<span class="feature-tag">${functionalLabels[f] || f}</span>`).join('') 
            : '<span class="value">Сонгоогүй</span>'}
        </div>
      </div>

      <div class="section">
        <div class="section-title">🎨 Дизайн & UI/UX</div>
        <div class="field"><span class="label">Үндсэн өнгө:</span> <span class="value">${data.primaryColor || 'Тодорхойгүй'}</span></div>
        <div class="field"><span class="label">Брэнд assets:</span> <span class="value">${data.hasBrandAssets || 'Тодорхойгүй'}</span></div>
        <div class="field"><span class="label">Дизайны хэв маяг:</span> <span class="value">${designStyleLabels[data.designPreference] || data.designPreference || 'Тодорхойгүй'}</span></div>
        <div class="field"><span class="label">Responsive:</span> <span class="value">${data.isResponsive || 'Тодорхойгүй'}</span></div>
        <div class="field"><span class="label">Хэл:</span></div>
        <div class="features-container">
          ${data.languages?.length > 0 
            ? data.languages.map(f => `<span class="feature-tag">${languageLabels[f] || f}</span>`).join('') 
            : '<span class="value">Сонгоогүй</span>'}
        </div>
      </div>

      <div class="section">
        <div class="section-title">📋 Header & Navigation</div>
        <div class="field"><span class="label">Header цэс:</span> <span class="value">${data.headerItems || 'Тодорхойгүй'}</span></div>
        <div class="field"><span class="label">Dropdown menu:</span> <span class="value">${data.hasDropdownMenu || 'Тодорхойгүй'}</span></div>
        <div class="field"><span class="label">Footer хэсгүүд:</span> <span class="value">${data.footerSections || 'Тодорхойгүй'}</span></div>
      </div>
    `;

    ecommerceText = `
КАТЕГОРИ & БАРААНЫ МЭДЭЭЛЭЛ
---------------------------
Жишээ сайт: ${data.exampleSite || 'Тодорхойгүй'}
Категориуд: ${data.categories || 'Тодорхойгүй'}
Sub-category: ${data.hasSubCategory || 'Тодорхойгүй'}
${data.hasSubCategory === 'Тийм' ? `Sub-category жишээ: ${data.subCategoryExample || 'Тодорхойгүй'}` : ''}
Барааны мэдээлэл: ${getArrayText(data.productInfo, productInfoLabels)}
Зургийн тоо: ${data.imageCount || 'Тодорхойгүй'}
Stock хяналт: ${data.hasStock || 'Тодорхойгүй'}

ХЭРЭГЛЭГЧ & ХАЙЛТ
-----------------
Хэрэглэгчийн функц: ${getArrayText(data.userFeatures, userFeatureLabels)}
Хайлт: ${data.hasSearch || 'Тодорхойгүй'}
Шүүлтүүр: ${getArrayText(data.filterOptions, filterLabels)}
Wishlist: ${data.hasWishlist || 'Тодорхойгүй'}

ЗАХИАЛГА & ТӨЛБӨР & ХҮРГЭЛТ
---------------------------
Cart (сагс): ${data.hasCart || 'Тодорхойгүй'}
Төлбөрийн хэлбэр: ${getArrayText(data.paymentMethods, paymentLabels)}
Хүргэлт: ${getArrayText(data.deliveryOptions, deliveryLabels)}
Захиалгын статус: ${getArrayText(data.orderStatuses, orderStatusLabels)}
Мэдэгдэл: ${getArrayText(data.orderNotifications, notificationLabels)}

ADMIN PANEL
-----------
Admin функц: ${getArrayText(data.adminFeatures, adminFeatureLabels)}
Admin тоо: ${data.adminCount || 'Тодорхойгүй'}
Admin удирдах: ${getArrayText(data.adminManages, adminManagesLabels)}
Функциональ шаардлага: ${getArrayText(data.functionalFeatures, functionalLabels)}

ДИЗАЙН & UI/UX
--------------
Үндсэн өнгө: ${data.primaryColor || 'Тодорхойгүй'}
Брэнд assets: ${data.hasBrandAssets || 'Тодорхойгүй'}
Дизайны хэв маяг: ${designStyleLabels[data.designPreference] || data.designPreference || 'Тодорхойгүй'}
Responsive: ${data.isResponsive || 'Тодорхойгүй'}
Хэл: ${getArrayText(data.languages, languageLabels)}

HEADER & NAVIGATION
-------------------
Header цэс: ${data.headerItems || 'Тодорхойгүй'}
Dropdown menu: ${data.hasDropdownMenu || 'Тодорхойгүй'}
Footer хэсгүүд: ${data.footerSections || 'Тодорхойгүй'}
`;
  }

  // Non-ecommerce sections
  let standardHTML = '';
  let standardText = '';

  if (!isEcommerce) {
    standardHTML = `
      <div class="section">
        <div class="section-title">⚡ Шаардлагатай функцүүд</div>
        <div class="features-container">
          ${data.features?.length > 0 
            ? data.features.map(f => `<span class="feature-tag">${featureLabels[f] || f}</span>`).join('') 
            : '<span class="value">Сонгоогүй</span>'}
        </div>
      </div>

      <div class="section">
        <div class="section-title">🎨 Дизайн</div>
        <div class="field"><span class="label">Дизайны хэв маяг:</span> <span class="value">${designStyleLabels[data.designStyle] || data.designStyle || 'Тодорхойгүй'}</span></div>
        <div class="field"><span class="label">Лого байгаа эсэх:</span> <span class="value">${data.hasLogo || 'Тодорхойгүй'}</span></div>
        <div class="field"><span class="label">Өнгөний сонголт:</span> <span class="value">${data.colorPreference || 'Тодорхойгүй'}</span></div>
      </div>
    `;

    standardText = `
ШААРДЛАГАТАЙ ФУНКЦҮҮД
---------------------
${getArrayText(data.features, featureLabels)}

ДИЗАЙН
------
Дизайны хэв маяг: ${designStyleLabels[data.designStyle] || data.designStyle || 'Тодорхойгүй'}
Лого байгаа эсэх: ${data.hasLogo || 'Тодорхойгүй'}
Өнгөний сонголт: ${data.colorPreference || 'Тодорхойгүй'}
`;
  }

  // Create email content
  const emailContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
    .container { max-width: 700px; margin: 0 auto; }
    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px 30px; text-align: center; }
    .header h1 { margin: 0; font-size: 28px; }
    .header p { margin: 10px 0 0; opacity: 0.9; }
    .type-badge { display: inline-block; background: rgba(255,255,255,0.2); padding: 8px 20px; border-radius: 25px; margin-top: 15px; font-weight: 600; }
    .content { background: #f8fafc; padding: 30px; }
    .section { background: white; padding: 25px; border-radius: 12px; margin-bottom: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
    .section-title { color: #667eea; font-size: 18px; font-weight: 600; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 2px solid #667eea; display: flex; align-items: center; gap: 10px; }
    .field { margin-bottom: 12px; display: flex; flex-wrap: wrap; }
    .label { font-weight: 600; color: #64748b; min-width: 160px; }
    .value { color: #1e293b; flex: 1; }
    .features-container { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px; }
    .feature-tag { background: linear-gradient(135deg, #667eea20 0%, #764ba220 100%); color: #667eea; padding: 6px 14px; border-radius: 20px; font-size: 13px; font-weight: 500; }
    .description-box { background: #f1f5f9; padding: 20px; border-radius: 8px; margin-top: 10px; white-space: pre-wrap; }
    .footer { text-align: center; padding: 25px; color: #64748b; font-size: 13px; }
    .highlight { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 3px 10px; border-radius: 4px; font-weight: 500; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🚀 Шинэ вебсайт захиалга!</h1>
      <p>Шинэ үйлчлүүлэгчээс захиалга ирлээ</p>
      <div class="type-badge">${isEcommerce ? '🛒 И-коммерс' : websiteTypeLabels[data.websiteType] || data.websiteType}</div>
    </div>
    <div class="content">
      <div class="section">
        <div class="section-title">👤 Үйлчлүүлэгчийн мэдээлэл</div>
        <div class="field"><span class="label">Нэр:</span> <span class="value">${data.name || 'Тодорхойгүй'}</span></div>
        <div class="field"><span class="label">Байгууллага:</span> <span class="value">${data.company || 'Тодорхойгүй'}</span></div>
        <div class="field"><span class="label">Имэйл:</span> <span class="value">${data.email || 'Тодорхойгүй'}</span></div>
        <div class="field"><span class="label">Утас:</span> <span class="value">${data.phone || 'Тодорхойгүй'}</span></div>
      </div>
      
      <div class="section">
        <div class="section-title">📋 Үндсэн мэдээлэл</div>
        <div class="field"><span class="label">Вебсайтын төрөл:</span> <span class="value">${websiteTypeLabels[data.websiteType] || data.websiteType || 'Тодорхойгүй'}</span></div>
        <div class="field"><span class="label">Хуудасны тоо:</span> <span class="value">${data.pages || 'Тодорхойгүй'}</span></div>
        <div class="field"><span class="label">Хугацаа:</span> <span class="value"><span class="highlight">${timelineLabels[data.timeline] || data.timeline || 'Тодорхойгүй'}</span></span></div>
        <div class="field"><span class="label">Төсөв:</span> <span class="value"><span class="highlight">${budgetLabels[data.budget] || data.budget || 'Тодорхойгүй'}</span></span></div>
      </div>

      ${isEcommerce ? ecommerceHTML : standardHTML}

      <div class="section">
        <div class="section-title">📝 Нэмэлт мэдээлэл</div>
        <div class="field"><span class="label">Жишээ вебсайт:</span> <span class="value">${data.reference || 'Тодорхойгүй'}</span></div>
        <div><span class="label">Дэлгэрэнгүй тайлбар:</span></div>
        <div class="description-box">${data.description || 'Тодорхойгүй'}</div>
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
ШИНЭ ВЕБСАЙТ ЗАХИАЛГА
=====================
Төрөл: ${isEcommerce ? '🛒 И-коммерс' : websiteTypeLabels[data.websiteType] || data.websiteType}

ҮЙЛЧЛҮҮЛЭГЧИЙН МЭДЭЭЛЭЛ
------------------------
Нэр: ${data.name || 'Тодорхойгүй'}
Байгууллага: ${data.company || 'Тодорхойгүй'}
Имэйл: ${data.email || 'Тодорхойгүй'}
Утас: ${data.phone || 'Тодорхойгүй'}

ҮНДСЭН МЭДЭЭЛЭЛ
---------------
Вебсайтын төрөл: ${websiteTypeLabels[data.websiteType] || data.websiteType || 'Тодорхойгүй'}
Хуудасны тоо: ${data.pages || 'Тодорхойгүй'}
Хугацаа: ${timelineLabels[data.timeline] || data.timeline || 'Тодорхойгүй'}
Төсөв: ${budgetLabels[data.budget] || data.budget || 'Тодорхойгүй'}

${isEcommerce ? ecommerceText : standardText}

НЭМЭЛТ МЭДЭЭЛЭЛ
---------------
Жишээ вебсайт: ${data.reference || 'Тодорхойгүй'}

Дэлгэрэнгүй тайлбар:
${data.description || 'Тодорхойгүй'}
  `;

  try {
    // Configure nodemailer transporter
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
      replyTo: data.email,
      subject: `🚀 ${isEcommerce ? '🛒 И-коммерс' : 'Шинэ'} захиалга: ${data.name} - ${websiteTypeLabels[data.websiteType] || data.websiteType}`,
      text: textContent,
      html: emailContent,
    });

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ message: 'Failed to send email', error: error.message });
  }
}
