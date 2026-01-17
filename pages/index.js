import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGlobe, FaPaintBrush, FaRocket, FaCheckCircle, FaSpinner, FaArrowRight, FaArrowLeft, FaUser, FaBuilding, FaEnvelope, FaPhone, FaLayerGroup, FaPalette, FaClock, FaMoneyBillWave, FaFileAlt, FaStar, FaShoppingCart, FaCreditCard, FaTruck, FaUsersCog, FaBars } from 'react-icons/fa'

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  // Input refs
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const phoneRef = useRef(null)
  const descriptionRef = useRef(null)
  
  const [formData, setFormData] = useState({
    // Үндсэн мэдээлэл
    name: '',
    company: '',
    email: '',
    phone: '',
    websiteType: '',
    pages: '',
    features: [],
    designStyle: '',
    hasLogo: '',
    colorPreference: '',
    timeline: '',
    budget: '',
    description: '',
    reference: '',
    
    // И-коммерс тусгай талбарууд
    exampleSite: '',
    categories: '',
    hasSubCategory: '',
    subCategoryExample: '',
    
    // Барааны мэдээлэл
    productInfo: [],
    imageCount: '',
    hasStock: '',
    
    // Хэрэглэгчийн функц
    userFeatures: [],
    hasSearch: '',
    filterOptions: [],
    hasWishlist: '',
    
    // Захиалга & Төлбөр
    hasCart: '',
    paymentMethods: [],
    deliveryOptions: [],
    orderStatuses: [],
    orderNotifications: [],
    
    // Admin Panel
    adminFeatures: [],
    adminCount: '',
    adminManages: [],
    
    // Функциональ шаардлага
    functionalFeatures: [],
    hasComments: '',
    hasFileUpload: '',
    
    // Дизайн & UI/UX
    primaryColor: '',
    hasBrandAssets: '',
    designPreference: '',
    isResponsive: '',
    languages: [],
    
    // Header & Navigation
    headerItems: '',
    hasDropdownMenu: '',
    footerSections: ''
  })

  const websiteTypes = [
    { value: 'business', label: 'Бизнесийн вебсайт', icon: '🏢' },
    { value: 'ecommerce', label: 'И-коммерс / Онлайн дэлгүүр', icon: '🛒' },
    { value: 'portfolio', label: 'Портфолио', icon: '🎨' },
    { value: 'blog', label: 'Блог / Мэдээллийн', icon: '📝' },
    { value: 'landing', label: 'Landing Page', icon: '🚀' },
    { value: 'webapp', label: 'Веб апликейшн', icon: '💻' },
    { value: 'other', label: 'Бусад', icon: '✨' }
  ]

  const featureOptions = [
    { value: 'responsive', label: 'Responsive дизайн' },
    { value: 'seo', label: 'SEO оптимизаци' },
    { value: 'analytics', label: 'Аналитик' },
    { value: 'contact', label: 'Холбоо барих форм' },
    { value: 'blog', label: 'Блог систем' },
    { value: 'payment', label: 'Төлбөрийн систем' },
    { value: 'admin', label: 'Админ панел' },
    { value: 'chat', label: 'Live чат' },
    { value: 'newsletter', label: 'Мэдээллийн товхимол' },
    { value: 'social', label: 'Сошиал медиа холболт' },
    { value: 'multilang', label: 'Олон хэлний дэмжлэг' },
    { value: 'booking', label: 'Захиалгын систем' }
  ]

  const designStyles = [
    { value: 'modern', label: 'Орчин үеийн / Минимал', icon: '✨' },
    { value: 'classic', label: 'Классик / Албан ёсны', icon: '📋' },
    { value: 'creative', label: 'Бүтээлч / Өнгөлөг', icon: '🎨' },
    { value: 'dark', label: 'Dark theme', icon: '🌙' },
    { value: 'corporate', label: 'Корпорат', icon: '🏛️' }
  ]

  const timelines = [
    { value: 'urgent', label: '1-2 долоо хоног (яаралтай)', icon: '⚡' },
    { value: 'normal', label: '2-4 долоо хоног', icon: '📅' },
    { value: 'relaxed', label: '1-2 сар', icon: '🕐' },
    { value: 'flexible', label: 'Уян хатан', icon: '🔄' }
  ]

  const budgets = [
    { value: 'small', label: '500,000₮ - 1,000,000₮' },
    { value: 'medium', label: '1,000,000₮ - 3,000,000₮' },
    { value: 'large', label: '3,000,000₮ - 5,000,000₮' },
    { value: 'enterprise', label: '5,000,000₮+' },
    { value: 'discuss', label: 'Ярилцъя' }
  ]

  // И-коммерс тусгай options
  const productInfoOptions = [
    { value: 'price', label: 'Үнэ' },
    { value: 'images', label: 'Зураг' },
    { value: 'size', label: 'Размер' },
    { value: 'color', label: 'Өнгө' },
    { value: 'description', label: 'Тайлбар' },
    { value: 'sku', label: 'SKU код' },
    { value: 'weight', label: 'Жин' },
    { value: 'brand', label: 'Брэнд' }
  ]

  const userFeatureOptions = [
    { value: 'register', label: 'Бүртгүүлэх' },
    { value: 'login', label: 'Нэвтрэх' },
    { value: 'guest', label: 'Guest-ээр захиалах' },
    { value: 'profile', label: 'Профайл засах' },
    { value: 'orderHistory', label: 'Захиалгын түүх' },
    { value: 'socialLogin', label: 'Social login (Facebook, Google)' }
  ]

  const filterOptionsData = [
    { value: 'price', label: 'Үнээр шүүх' },
    { value: 'category', label: 'Категориор' },
    { value: 'size', label: 'Размераар' },
    { value: 'color', label: 'Өнгөөр' },
    { value: 'brand', label: 'Брэндээр' },
    { value: 'rating', label: 'Үнэлгээгээр' }
  ]

  const paymentMethodOptions = [
    { value: 'qpay', label: 'QPay' },
    { value: 'transfer', label: 'Банк шилжүүлэг' }
  ]

  const deliveryOptionData = [
    { value: 'city', label: 'Хот дотор' },
    { value: 'countryside', label: 'Орон нутаг' },
    { value: 'pickup', label: 'Өөрөө авах' },
    { value: 'express', label: 'Яаралтай хүргэлт' }
  ]

  const orderStatusOptions = [
    { value: 'pending', label: 'Pending (Хүлээгдэж буй)' },
    { value: 'paid', label: 'Paid (Төлөгдсөн)' },
    { value: 'processing', label: 'Processing (Бэлтгэж буй)' },
    { value: 'shipped', label: 'Shipped (Илгээсэн)' },
    { value: 'delivered', label: 'Delivered (Хүргэгдсэн)' },
    { value: 'cancelled', label: 'Cancelled (Цуцлагдсан)' }
  ]

  const orderNotificationOptions = [
    { value: 'sms', label: 'SMS' },
    { value: 'email', label: 'Email' },
    { value: 'push', label: 'Push notification' }
  ]

  const adminFeatureOptions = [
    { value: 'addProduct', label: 'Бараа нэмэх' },
    { value: 'editProduct', label: 'Бараа засах' },
    { value: 'deleteProduct', label: 'Бараа устгах' },
    { value: 'manageCategory', label: 'Категори удирдах' },
    { value: 'viewOrders', label: 'Захиалга харах' },
    { value: 'changeOrderStatus', label: 'Захиалгын статус солих' },
    { value: 'reports', label: 'Тайлан харах' },
    { value: 'discount', label: 'Хямдрал тохируулах' }
  ]

  const adminManagesOptions = [
    { value: 'users', label: 'Хэрэглэгч' },
    { value: 'content', label: 'Контент' },
    { value: 'orders', label: 'Захиалга' },
    { value: 'products', label: 'Бараа' },
    { value: 'settings', label: 'Тохиргоо' }
  ]

  const functionalFeatureOptions = [
    { value: 'register', label: 'Бүртгүүлэх' },
    { value: 'login', label: 'Нэвтрэх' },
    { value: 'editProfile', label: 'Профайл засах' },
    { value: 'search', label: 'Хайлт' },
    { value: 'filter', label: 'Шүүлтүүр' },
    { value: 'comments', label: 'Сэтгэгдэл' },
    { value: 'reviews', label: 'Review / Үнэлгээ' },
    { value: 'like', label: 'Like' },
    { value: 'fileUpload', label: 'Файл upload' }
  ]

  const languageOptions = [
    { value: 'mn', label: '🇲🇳 Монгол' },
    { value: 'en', label: '🇺🇸 English' },
    { value: 'ru', label: '🇷🇺 Русский' },
    { value: 'cn', label: '🇨🇳 中文' },
    { value: 'kr', label: '🇰🇷 한국어' }
  ]

  // Dynamic steps based on website type
  const getSteps = () => {
    const baseSteps = [
      { title: 'Танилцуулга', icon: FaUser },
      { title: 'Вебсайтын төрөл', icon: FaLayerGroup },
    ]

    if (formData.websiteType === 'ecommerce') {
      return [
        ...baseSteps,
        { title: 'Категори & Бараа', icon: FaShoppingCart },
        { title: 'Хэрэглэгч & Хайлт', icon: FaUser },
        { title: 'Төлбөр & Хүргэлт', icon: FaCreditCard },
        { title: 'Admin Panel', icon: FaUsersCog },
        { title: 'Дизайн & UI', icon: FaPalette },
        { title: 'Navigation', icon: FaBars },
        { title: 'Хугацаа & Төсөв', icon: FaClock },
        { title: 'Дэлгэрэнгүй', icon: FaFileAlt }
      ]
    }

    return [
      ...baseSteps,
      { title: 'Онцлог шинжүүд', icon: FaStar },
      { title: 'Дизайн', icon: FaPalette },
      { title: 'Хугацаа & Төсөв', icon: FaClock },
      { title: 'Дэлгэрэнгүй', icon: FaFileAlt }
    ]
  }

  const steps = getSteps()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFeatureToggle = (feature) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }))
  }

  const handleArrayToggle = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(f => f !== value)
        : [...prev[field], value]
    }))
  }

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const validateForm = () => {
    // Шаардлагатай талбаруудыг шалгах
    if (!formData.name.trim()) {
      setCurrentStep(0)
      setTimeout(() => nameRef.current?.focus(), 100)
      return false
    }
    if (!formData.email.trim()) {
      setCurrentStep(0)
      setTimeout(() => emailRef.current?.focus(), 100)
      return false
    }
    if (!formData.phone.trim()) {
      setCurrentStep(0)
      setTimeout(() => phoneRef.current?.focus(), 100)
      return false
    }
    if (!formData.websiteType) {
      setCurrentStep(1)
      return false
    }
    if (!formData.description.trim()) {
      setCurrentStep(steps.length - 1)
      setTimeout(() => descriptionRef.current?.focus(), 100)
      return false
    }
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validation шалгах
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        alert('Алдаа гарлаа. Дахин оролдоно уу.')
      }
    } catch (error) {
      alert('Алдаа гарлаа. Дахин оролдоно уу.')
    }

    setIsSubmitting(false)
  }

  const renderStep = () => {
    // И-коммерс биш бол хуучин steps
    if (formData.websiteType !== 'ecommerce') {
      switch (currentStep) {
        case 0:
          return renderBasicInfo()
        case 1:
          return renderWebsiteType()
        case 2:
          return renderFeatures()
        case 3:
          return renderDesign()
        case 4:
          return renderTimeBudget()
        case 5:
          return renderDetails()
        default:
          return null
      }
    }

    // И-коммерс steps
    switch (currentStep) {
      case 0:
        return renderBasicInfo()
      case 1:
        return renderWebsiteType()
      case 2:
        return renderCategoryProduct()
      case 3:
        return renderUserSearch()
      case 4:
        return renderPaymentDelivery()
      case 5:
        return renderAdminPanel()
      case 6:
        return renderDesignUI()
      case 7:
        return renderNavigation()
      case 8:
        return renderTimeBudget()
      case 9:
        return renderDetails()
      default:
        return null
    }
  }

  // Step 0: Үндсэн мэдээлэл
  const renderBasicInfo = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-white mb-6">Өөрийн тухай мэдээлэл</h2>
      
      <div className="space-y-4">
        <div className="relative">
          <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400" />
          <input
            ref={nameRef}
            type="text"
            name="name"
            placeholder="Таны нэр *"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 input-glow transition-all"
            required
          />
        </div>

        <div className="relative">
          <FaBuilding className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400" />
          <input
            type="text"
            name="company"
            placeholder="Байгууллагын нэр"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 input-glow transition-all"
          />
        </div>

        <div className="relative">
          <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400" />
          <input
            ref={emailRef}
            type="email"
            name="email"
            placeholder="И-мэйл хаяг *"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 input-glow transition-all"
            required
          />
        </div>

        <div className="relative">
          <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400" />
          <input
            ref={phoneRef}
            type="tel"
            name="phone"
            placeholder="Утасны дугаар *"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 input-glow transition-all"
            required
          />
        </div>
      </div>
    </motion.div>
  )

  // Step 1: Вебсайтын төрөл
  const renderWebsiteType = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-white mb-6">Ямар төрлийн вебсайт хэрэгтэй вэ?</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {websiteTypes.map((type) => (
          <motion.div
            key={type.value}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              setFormData(prev => ({ ...prev, websiteType: type.value }))
              // Reset to step 1 when changing type to recalculate steps
            }}
            className={`p-4 rounded-xl cursor-pointer transition-all ${
              formData.websiteType === type.value
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 border-transparent'
                : 'bg-white/5 border border-white/10 hover:border-purple-500/50'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{type.icon}</span>
              <span className="text-white font-medium">{type.label}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6">
        <label className="text-white/70 mb-2 block">Хэдэн хуудастай байх вэ?</label>
        <input
          type="text"
          name="pages"
          placeholder="Жишээ: 5-10 хуудас"
          value={formData.pages}
          onChange={handleInputChange}
          className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 input-glow transition-all"
        />
      </div>
    </motion.div>
  )

  // Step: Онцлог шинжүүд (non-ecommerce)
  const renderFeatures = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-white mb-6">Ямар онцлог шинжүүд хэрэгтэй вэ?</h2>
      <p className="text-white/60 mb-4">Олон сонголт хийж болно</p>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {featureOptions.map((feature) => (
          <motion.div
            key={feature.value}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleFeatureToggle(feature.value)}
            className={`p-3 rounded-xl cursor-pointer transition-all text-center ${
              formData.features.includes(feature.value)
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 border-transparent'
                : 'bg-white/5 border border-white/10 hover:border-purple-500/50'
            }`}
          >
            <span className="text-white text-sm font-medium">{feature.label}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )

  // Step: Дизайн (non-ecommerce)
  const renderDesign = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-white mb-6">Дизайны талаар</h2>
      
      <div className="space-y-6">
        <div>
          <label className="text-white/70 mb-3 block">Дизайны хэв маяг</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {designStyles.map((style) => (
              <motion.div
                key={style.value}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setFormData(prev => ({ ...prev, designStyle: style.value }))}
                className={`p-4 rounded-xl cursor-pointer transition-all ${
                  formData.designStyle === style.value
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 border-transparent'
                    : 'bg-white/5 border border-white/10 hover:border-purple-500/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{style.icon}</span>
                  <span className="text-white font-medium">{style.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <label className="text-white/70 mb-3 block">Лого байгаа эсэх</label>
          <div className="flex gap-4">
            {['Тийм', 'Үгүй', 'Хийлгэх хэрэгтэй'].map((option) => (
              <motion.div
                key={option}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setFormData(prev => ({ ...prev, hasLogo: option }))}
                className={`px-4 py-3 rounded-xl cursor-pointer transition-all ${
                  formData.hasLogo === option
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 border-transparent'
                    : 'bg-white/5 border border-white/10 hover:border-purple-500/50'
                }`}
              >
                <span className="text-white font-medium">{option}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <label className="text-white/70 mb-2 block">Өнгөний сонголт</label>
          <input
            type="text"
            name="colorPreference"
            placeholder="Жишээ: Цэнхэр, цагаан өнгө голчлон..."
            value={formData.colorPreference}
            onChange={handleInputChange}
            className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 input-glow transition-all"
          />
        </div>
      </div>
    </motion.div>
  )

  // ============ E-COMMERCE STEPS ============

  // Step 2: Категори & Бараа (e-commerce)
  const renderCategoryProduct = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-white mb-6">🛍️ Категори & Барааны мэдээлэл</h2>
      
      <div className="space-y-6">
        <div>
          <label className="text-white/70 mb-2 block">Таалагддаг жишээ сайт (link)</label>
          <input
            type="text"
            name="exampleSite"
            placeholder="https://example.com"
            value={formData.exampleSite}
            onChange={handleInputChange}
            className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 input-glow transition-all"
          />
        </div>

        <div>
          <label className="text-white/70 mb-2 block">Барааг хэрхэн категори-д хуваах вэ?</label>
          <textarea
            name="categories"
            placeholder="Жишээ: Эрэгтэй / Эмэгтэй / Хүүхэд"
            value={formData.categories}
            onChange={handleInputChange}
            rows={2}
            className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 input-glow transition-all resize-none"
          />
        </div>

        <div>
          <label className="text-white/70 mb-3 block">Sub-category хэрэгтэй юу?</label>
          <div className="flex gap-4 mb-3">
            {['Тийм', 'Үгүй'].map((option) => (
              <motion.div
                key={option}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setFormData(prev => ({ ...prev, hasSubCategory: option }))}
                className={`px-6 py-3 rounded-xl cursor-pointer transition-all ${
                  formData.hasSubCategory === option
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 border-transparent'
                    : 'bg-white/5 border border-white/10 hover:border-purple-500/50'
                }`}
              >
                <span className="text-white font-medium">{option}</span>
              </motion.div>
            ))}
          </div>
          {formData.hasSubCategory === 'Тийм' && (
            <input
              type="text"
              name="subCategoryExample"
              placeholder="Жишээ: Хувцас → Цамц / Өмд / Пальто"
              value={formData.subCategoryExample}
              onChange={handleInputChange}
              className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 input-glow transition-all"
            />
          )}
        </div>

        <div>
          <label className="text-white/70 mb-3 block">Бараанд ямар мэдээлэл орох вэ?</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {productInfoOptions.map((option) => (
              <motion.div
                key={option.value}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleArrayToggle('productInfo', option.value)}
                className={`p-3 rounded-xl cursor-pointer transition-all text-center ${
                  formData.productInfo.includes(option.value)
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 border-transparent'
                    : 'bg-white/5 border border-white/10 hover:border-purple-500/50'
                }`}
              >
                <span className="text-white text-sm font-medium">{option.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <label className="text-white/70 mb-2 block">Зураг хэдэн ширхэг байх вэ? (бараа тус бүрт)</label>
          <input
            type="text"
            name="imageCount"
            placeholder="Жишээ: 3-5 зураг"
            value={formData.imageCount}
            onChange={handleInputChange}
            className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 input-glow transition-all"
          />
        </div>

        <div>
          <label className="text-white/70 mb-3 block">Stock (үлдэгдэл) хянах уу?</label>
          <div className="flex gap-4">
            {['Тийм', 'Үгүй'].map((option) => (
              <motion.div
                key={option}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setFormData(prev => ({ ...prev, hasStock: option }))}
                className={`px-6 py-3 rounded-xl cursor-pointer transition-all ${
                  formData.hasStock === option
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 border-transparent'
                    : 'bg-white/5 border border-white/10 hover:border-purple-500/50'
                }`}
              >
                <span className="text-white font-medium">{option}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )

  // Step 3: Хэрэглэгч & Хайлт (e-commerce)
  const renderUserSearch = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-white mb-6">👤 Хэрэглэгч & Хайлт</h2>
      
      <div className="space-y-6">
        <div>
          <label className="text-white/70 mb-3 block">Хэрэглэгчийн функц</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {userFeatureOptions.map((option) => (
              <motion.div
                key={option.value}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleArrayToggle('userFeatures', option.value)}
                className={`p-3 rounded-xl cursor-pointer transition-all text-center ${
                  formData.userFeatures.includes(option.value)
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 border-transparent'
                    : 'bg-white/5 border border-white/10 hover:border-purple-500/50'
                }`}
              >
                <span className="text-white text-sm font-medium">{option.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <label className="text-white/70 mb-3 block">Search (хайлт) хэрэгтэй юу?</label>
          <div className="flex gap-4">
            {['Тийм', 'Үгүй'].map((option) => (
              <motion.div
                key={option}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setFormData(prev => ({ ...prev, hasSearch: option }))}
                className={`px-6 py-3 rounded-xl cursor-pointer transition-all ${
                  formData.hasSearch === option
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 border-transparent'
                    : 'bg-white/5 border border-white/10 hover:border-purple-500/50'
                }`}
              >
                <span className="text-white font-medium">{option}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <label className="text-white/70 mb-3 block">Filter (шүүлтүүр) ямар ямраар?</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {filterOptionsData.map((option) => (
              <motion.div
                key={option.value}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleArrayToggle('filterOptions', option.value)}
                className={`p-3 rounded-xl cursor-pointer transition-all text-center ${
                  formData.filterOptions.includes(option.value)
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 border-transparent'
                    : 'bg-white/5 border border-white/10 hover:border-purple-500/50'
                }`}
              >
                <span className="text-white text-sm font-medium">{option.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <label className="text-white/70 mb-3 block">❤️ Favorite / Wishlist хэрэгтэй юу?</label>
          <div className="flex gap-4">
            {['Тийм', 'Үгүй'].map((option) => (
              <motion.div
                key={option}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setFormData(prev => ({ ...prev, hasWishlist: option }))}
                className={`px-6 py-3 rounded-xl cursor-pointer transition-all ${
                  formData.hasWishlist === option
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 border-transparent'
                    : 'bg-white/5 border border-white/10 hover:border-purple-500/50'
                }`}
              >
                <span className="text-white font-medium">{option}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )

  // Step 4: Төлбөр & Хүргэлт (e-commerce)
  const renderPaymentDelivery = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-white mb-6">💳 Захиалга & Төлбөр & Хүргэлт</h2>
      
      <div className="space-y-6">
        <div>
          <label className="text-white/70 mb-3 block">🛒 Cart (сагс) хэрэгтэй юу?</label>
          <div className="flex gap-4">
            {['Тийм', 'Үгүй'].map((option) => (
              <motion.div
                key={option}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setFormData(prev => ({ ...prev, hasCart: option }))}
                className={`px-6 py-3 rounded-xl cursor-pointer transition-all ${
                  formData.hasCart === option
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 border-transparent'
                    : 'bg-white/5 border border-white/10 hover:border-purple-500/50'
                }`}
              >
                <span className="text-white font-medium">{option}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <label className="text-white/70 mb-3 block">Төлбөрийн хэлбэр</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {paymentMethodOptions.map((option) => (
              <motion.div
                key={option.value}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleArrayToggle('paymentMethods', option.value)}
                className={`p-3 rounded-xl cursor-pointer transition-all text-center ${
                  formData.paymentMethods.includes(option.value)
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 border-transparent'
                    : 'bg-white/5 border border-white/10 hover:border-purple-500/50'
                }`}
              >
                <span className="text-white text-sm font-medium">{option.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <label className="text-white/70 mb-3 block">🚚 Хүргэлт</label>
          <div className="grid grid-cols-2 gap-3">
            {deliveryOptionData.map((option) => (
              <motion.div
                key={option.value}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleArrayToggle('deliveryOptions', option.value)}
                className={`p-3 rounded-xl cursor-pointer transition-all text-center ${
                  formData.deliveryOptions.includes(option.value)
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 border-transparent'
                    : 'bg-white/5 border border-white/10 hover:border-purple-500/50'
                }`}
              >
                <span className="text-white text-sm font-medium">{option.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <label className="text-white/70 mb-3 block">Захиалгын статус</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {orderStatusOptions.map((option) => (
              <motion.div
                key={option.value}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleArrayToggle('orderStatuses', option.value)}
                className={`p-3 rounded-xl cursor-pointer transition-all text-center ${
                  formData.orderStatuses.includes(option.value)
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 border-transparent'
                    : 'bg-white/5 border border-white/10 hover:border-purple-500/50'
                }`}
              >
                <span className="text-white text-sm font-medium">{option.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <label className="text-white/70 mb-3 block">📱 Захиалгын мэдэгдэл</label>
          <div className="grid grid-cols-3 gap-3">
            {orderNotificationOptions.map((option) => (
              <motion.div
                key={option.value}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleArrayToggle('orderNotifications', option.value)}
                className={`p-3 rounded-xl cursor-pointer transition-all text-center ${
                  formData.orderNotifications.includes(option.value)
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 border-transparent'
                    : 'bg-white/5 border border-white/10 hover:border-purple-500/50'
                }`}
              >
                <span className="text-white text-sm font-medium">{option.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )

  // Step 5: Admin Panel (e-commerce)
  const renderAdminPanel = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-white mb-6">⚙️ Admin Panel</h2>
      
      <div className="space-y-6">
        <div>
          <label className="text-white/70 mb-3 block">Admin-д дараах боломжууд хэрэгтэй юу?</label>
          <div className="grid grid-cols-2 gap-3">
            {adminFeatureOptions.map((option) => (
              <motion.div
                key={option.value}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleArrayToggle('adminFeatures', option.value)}
                className={`p-3 rounded-xl cursor-pointer transition-all text-center ${
                  formData.adminFeatures.includes(option.value)
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 border-transparent'
                    : 'bg-white/5 border border-white/10 hover:border-purple-500/50'
                }`}
              >
                <span className="text-white text-sm font-medium">{option.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <label className="text-white/70 mb-2 block">Хэдэн admin хэрэглэгч байх вэ?</label>
          <input
            type="text"
            name="adminCount"
            placeholder="Жишээ: 2-3 admin"
            value={formData.adminCount}
            onChange={handleInputChange}
            className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 input-glow transition-all"
          />
        </div>

        <div>
          <label className="text-white/70 mb-3 block">Admin юу удирдах вэ?</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {adminManagesOptions.map((option) => (
              <motion.div
                key={option.value}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleArrayToggle('adminManages', option.value)}
                className={`p-3 rounded-xl cursor-pointer transition-all text-center ${
                  formData.adminManages.includes(option.value)
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 border-transparent'
                    : 'bg-white/5 border border-white/10 hover:border-purple-500/50'
                }`}
              >
                <span className="text-white text-sm font-medium">{option.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <label className="text-white/70 mb-3 block">Функциональ шаардлага</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {functionalFeatureOptions.map((option) => (
              <motion.div
                key={option.value}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleArrayToggle('functionalFeatures', option.value)}
                className={`p-3 rounded-xl cursor-pointer transition-all text-center ${
                  formData.functionalFeatures.includes(option.value)
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 border-transparent'
                    : 'bg-white/5 border border-white/10 hover:border-purple-500/50'
                }`}
              >
                <span className="text-white text-sm font-medium">{option.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )

  // Step 6: Дизайн & UI/UX (e-commerce)
  const renderDesignUI = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-white mb-6">🎨 Дизайн & UI/UX</h2>
      
      <div className="space-y-6">
        <div>
          <label className="text-white/70 mb-2 block">Сайтын үндсэн өнгө</label>
          <input
            type="text"
            name="primaryColor"
            placeholder="Жишээ: Цэнхэр, Ягаан, Хар гэх мэт..."
            value={formData.primaryColor}
            onChange={handleInputChange}
            className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 input-glow transition-all"
          />
        </div>

        <div>
          <label className="text-white/70 mb-3 block">Брэндийн өнгө, лого байна уу?</label>
          <div className="flex gap-4">
            {['Тийм', 'Үгүй', 'Хийлгэх хэрэгтэй'].map((option) => (
              <motion.div
                key={option}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setFormData(prev => ({ ...prev, hasBrandAssets: option }))}
                className={`px-4 py-3 rounded-xl cursor-pointer transition-all ${
                  formData.hasBrandAssets === option
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 border-transparent'
                    : 'bg-white/5 border border-white/10 hover:border-purple-500/50'
                }`}
              >
                <span className="text-white font-medium">{option}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <label className="text-white/70 mb-3 block">Дизайны хэв маяг</label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {designStyles.map((style) => (
              <motion.div
                key={style.value}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setFormData(prev => ({ ...prev, designPreference: style.value }))}
                className={`p-4 rounded-xl cursor-pointer transition-all ${
                  formData.designPreference === style.value
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 border-transparent'
                    : 'bg-white/5 border border-white/10 hover:border-purple-500/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{style.icon}</span>
                  <span className="text-white font-medium">{style.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <label className="text-white/70 mb-3 block">📱 Mobile, tablet, desktop дээр ажиллах уу? (Responsive)</label>
          <div className="flex gap-4">
            {['Тийм', 'Зөвхөн Desktop'].map((option) => (
              <motion.div
                key={option}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setFormData(prev => ({ ...prev, isResponsive: option }))}
                className={`px-6 py-3 rounded-xl cursor-pointer transition-all ${
                  formData.isResponsive === option
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 border-transparent'
                    : 'bg-white/5 border border-white/10 hover:border-purple-500/50'
                }`}
              >
                <span className="text-white font-medium">{option}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <label className="text-white/70 mb-3 block">🌐 Хэл сонголт</label>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {languageOptions.map((option) => (
              <motion.div
                key={option.value}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleArrayToggle('languages', option.value)}
                className={`p-3 rounded-xl cursor-pointer transition-all text-center ${
                  formData.languages.includes(option.value)
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 border-transparent'
                    : 'bg-white/5 border border-white/10 hover:border-purple-500/50'
                }`}
              >
                <span className="text-white text-sm font-medium">{option.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )

  // Step 7: Navigation (e-commerce)
  const renderNavigation = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-white mb-6">📋 Header & Navigation</h2>
      
      <div className="space-y-6">
        <div>
          <label className="text-white/70 mb-2 block">Header-т ямар цэс орох вэ?</label>
          <textarea
            name="headerItems"
            placeholder="Жишээ: Нүүр, Бүтээгдэхүүн, Категори, Хямдрал, Холбоо барих, Бидний тухай..."
            value={formData.headerItems}
            onChange={handleInputChange}
            rows={3}
            className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 input-glow transition-all resize-none"
          />
        </div>

        <div>
          <label className="text-white/70 mb-3 block">Dropdown menu хэрэгтэй юу?</label>
          <div className="flex gap-4">
            {['Тийм', 'Үгүй'].map((option) => (
              <motion.div
                key={option}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setFormData(prev => ({ ...prev, hasDropdownMenu: option }))}
                className={`px-6 py-3 rounded-xl cursor-pointer transition-all ${
                  formData.hasDropdownMenu === option
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 border-transparent'
                    : 'bg-white/5 border border-white/10 hover:border-purple-500/50'
                }`}
              >
                <span className="text-white font-medium">{option}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <label className="text-white/70 mb-2 block">Footer-т ямар хэсгүүд орох вэ?</label>
          <textarea
            name="footerSections"
            placeholder="Жишээ: Холбоо барих, Social links, Newsletter, Бидний тухай, Үйлчилгээний нөхцөл..."
            value={formData.footerSections}
            onChange={handleInputChange}
            rows={3}
            className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 input-glow transition-all resize-none"
          />
        </div>

        <div>
          <label className="text-white/70 mb-2 block">Дуртай жишээ сайт (reference link)</label>
          <input
            type="text"
            name="reference"
            placeholder="https://example.com"
            value={formData.reference}
            onChange={handleInputChange}
            className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 input-glow transition-all"
          />
        </div>
      </div>
    </motion.div>
  )

  // Step: Хугацаа & Төсөв
  const renderTimeBudget = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-white mb-6">Хугацаа & Төсөв</h2>
      
      <div className="space-y-6">
        <div>
          <label className="text-white/70 mb-3 block flex items-center gap-2">
            <FaClock className="text-purple-400" />
            Хэзээ бэлэн болох хэрэгтэй вэ?
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {timelines.map((time) => (
              <motion.div
                key={time.value}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setFormData(prev => ({ ...prev, timeline: time.value }))}
                className={`p-4 rounded-xl cursor-pointer transition-all ${
                  formData.timeline === time.value
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 border-transparent'
                    : 'bg-white/5 border border-white/10 hover:border-purple-500/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{time.icon}</span>
                  <span className="text-white font-medium">{time.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <label className="text-white/70 mb-3 block flex items-center gap-2">
            <FaMoneyBillWave className="text-purple-400" />
            Төсөв
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {budgets.map((budget) => (
              <motion.div
                key={budget.value}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setFormData(prev => ({ ...prev, budget: budget.value }))}
                className={`p-4 rounded-xl cursor-pointer transition-all ${
                  formData.budget === budget.value
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 border-transparent'
                    : 'bg-white/5 border border-white/10 hover:border-purple-500/50'
                }`}
              >
                <span className="text-white font-medium">{budget.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )

  // Step: Дэлгэрэнгүй
  const renderDetails = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-white mb-6">Дэлгэрэнгүй мэдээлэл</h2>
      
      <div className="space-y-4">
        <div>
          <label className="text-white/70 mb-2 block">Төслийн тухай дэлгэрэнгүй *</label>
          <textarea
            ref={descriptionRef}
            name="description"
            placeholder="Вебсайтынхаа талаар дэлгэрэнгүй бичнэ үү. Юу хүсч байгаа, ямар зорилготой гэх мэт..."
            value={formData.description}
            onChange={handleInputChange}
            rows={5}
            className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 input-glow transition-all resize-none"
          />
        </div>

        {formData.websiteType !== 'ecommerce' && (
          <div>
            <label className="text-white/70 mb-2 block">Жишээ вебсайтууд (байвал)</label>
            <textarea
              name="reference"
              placeholder="Таалагдсан вебсайтуудын линк, эсвэл ямар маягийн дизайн таалагддаг тухай..."
              value={formData.reference}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 input-glow transition-all resize-none"
            />
          </div>
        )}
      </div>
    </motion.div>
  )

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="glass rounded-3xl p-12 text-center max-w-md"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <FaCheckCircle className="text-white text-5xl" />
          </motion.div>
          <h2 className="text-3xl font-bold text-white mb-4">Баярлалаа! 🎉</h2>
          <p className="text-white/70 mb-6">
            Таны хүсэлтийг амжилттай хүлээн авлаа. Бид тантай удахгүй холбогдох болно.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setIsSubmitted(false)
              setCurrentStep(0)
              setFormData({
                name: '', company: '', email: '', phone: '', websiteType: '', pages: '',
                features: [], designStyle: '', hasLogo: '', colorPreference: '',
                timeline: '', budget: '', description: '', reference: '',
                exampleSite: '', categories: '', hasSubCategory: '', subCategoryExample: '',
                productInfo: [], imageCount: '', hasStock: '',
                userFeatures: [], hasSearch: '', filterOptions: [], hasWishlist: '',
                hasCart: '', paymentMethods: [], deliveryOptions: [], orderStatuses: [], orderNotifications: [],
                adminFeatures: [], adminCount: '', adminManages: [],
                functionalFeatures: [], hasComments: '', hasFileUpload: '',
                primaryColor: '', hasBrandAssets: '', designPreference: '', isResponsive: '', languages: [],
                headerItems: '', hasDropdownMenu: '', footerSections: ''
              })
            }}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold"
          >
            Шинэ хүсэлт илгээх
          </motion.button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 container mx-auto px-4 py-8 md:py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaGlobe className="text-4xl text-purple-400" />
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">
              Вебсайт Захиалга
            </h1>
          </div>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Таны бизнест зориулсан мэргэжлийн вебсайт бүтээх хүсэлт илгээнэ үү
          </p>
        </motion.div>

        {/* Progress Steps */}
        <div className="max-w-5xl mx-auto mb-8 overflow-x-auto pb-4">
          <div className="flex justify-between items-center min-w-max px-4">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center relative">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setCurrentStep(index)}
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                    index <= currentStep
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600'
                      : 'bg-white/10'
                  }`}
                >
                  <step.icon className={`text-sm md:text-lg ${index <= currentStep ? 'text-white' : 'text-white/40'}`} />
                </motion.div>
                <span className={`hidden md:block text-xs mt-2 whitespace-nowrap ${index <= currentStep ? 'text-white' : 'text-white/40'}`}>
                  {step.title}
                </span>
                {index < steps.length - 1 && (
                  <div className={`absolute top-5 left-full w-full h-0.5 -translate-y-1/2 ${
                    index < currentStep ? 'bg-gradient-to-r from-purple-600 to-pink-600' : 'bg-white/10'
                  }`} style={{ width: 'calc(100% - 2rem)', minWidth: '40px' }} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 md:p-12">
            <AnimatePresence mode="wait">
              {renderStep()}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-10">
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={prevStep}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                  currentStep === 0
                    ? 'opacity-0 pointer-events-none'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <FaArrowLeft /> Өмнөх
              </motion.button>

              {currentStep === steps.length - 1 ? (
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold btn-glow"
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin" /> Илгээж байна...
                    </>
                  ) : (
                    <>
                      <FaRocket /> Илгээх
                    </>
                  )}
                </motion.button>
              ) : (
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={nextStep}
                  className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold btn-glow"
                >
                  Дараах <FaArrowRight />
                </motion.button>
              )}
            </div>
          </form>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 text-white/40 text-sm"
        >
          <p>© 2026 Вебсайт Захиалга | Бүх эрх хуулиар хамгаалагдсан</p>
        </motion.div>
      </div>
    </div>
  )
}
