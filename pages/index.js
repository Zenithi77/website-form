import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGlobe, FaPaintBrush, FaRocket, FaCheckCircle, FaSpinner, FaArrowRight, FaArrowLeft, FaUser, FaBuilding, FaEnvelope, FaPhone, FaLayerGroup, FaPalette, FaClock, FaMoneyBillWave, FaFileAlt, FaStar, FaShoppingCart, FaCreditCard, FaTruck, FaUsersCog, FaBars } from 'react-icons/fa'

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showSupernova, setShowSupernova] = useState(false)
  const [showSuccessContent, setShowSuccessContent] = useState(false)
  
  // Input refs
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const phoneRef = useRef(null)
  const descriptionRef = useRef(null)
  
  // Trigger supernova animation when submitted
  useEffect(() => {
    if (isSubmitted) {
      // Start rocket animation
      setTimeout(() => setShowSupernova(true), 1500)
      // Show success content after supernova
      setTimeout(() => setShowSuccessContent(true), 3000)
    }
  }, [isSubmitted])
  
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
          <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400" />
          <input
            ref={nameRef}
            type="text"
            name="name"
            placeholder="Таны нэр *"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 input-glow transition-all"
            required
          />
        </div>

        <div className="relative">
          <FaBuilding className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400" />
          <input
            type="text"
            name="company"
            placeholder="Байгууллагын нэр"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 input-glow transition-all"
          />
        </div>

        <div className="relative">
          <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400" />
          <input
            ref={emailRef}
            type="email"
            name="email"
            placeholder="И-мэйл хаяг *"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 input-glow transition-all"
            required
          />
        </div>

        <div className="relative">
          <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400" />
          <input
            ref={phoneRef}
            type="tel"
            name="phone"
            placeholder="Утасны дугаар *"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 input-glow transition-all"
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
                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 border-transparent'
                : 'bg-white/5 border border-white/10 hover:border-cyan-500/50'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{type.icon}</span>
              <span className="text-white font-medium">{type.label}</span>
            </div>
          </motion.div>
        ))}
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
                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 border-transparent'
                : 'bg-white/5 border border-white/10 hover:border-cyan-500/50'
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
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 border-transparent'
                    : 'bg-white/5 border border-white/10 hover:border-cyan-500/50'
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
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 border-transparent'
                    : 'bg-white/5 border border-white/10 hover:border-cyan-500/50'
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
            className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 input-glow transition-all"
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
            className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 input-glow transition-all"
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
            className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 input-glow transition-all resize-none"
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
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 border-transparent'
                    : 'bg-white/5 border border-white/10 hover:border-cyan-500/50'
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
              className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 input-glow transition-all"
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
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 border-transparent'
                    : 'bg-white/5 border border-white/10 hover:border-cyan-500/50'
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
            className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 input-glow transition-all"
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
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 border-transparent'
                    : 'bg-white/5 border border-white/10 hover:border-cyan-500/50'
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
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 border-transparent'
                    : 'bg-white/5 border border-white/10 hover:border-cyan-500/50'
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
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 border-transparent'
                    : 'bg-white/5 border border-white/10 hover:border-cyan-500/50'
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
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 border-transparent'
                    : 'bg-white/5 border border-white/10 hover:border-cyan-500/50'
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
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 border-transparent'
                    : 'bg-white/5 border border-white/10 hover:border-cyan-500/50'
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
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 border-transparent'
                    : 'bg-white/5 border border-white/10 hover:border-cyan-500/50'
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
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 border-transparent'
                    : 'bg-white/5 border border-white/10 hover:border-cyan-500/50'
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
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 border-transparent'
                    : 'bg-white/5 border border-white/10 hover:border-cyan-500/50'
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
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 border-transparent'
                    : 'bg-white/5 border border-white/10 hover:border-cyan-500/50'
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
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 border-transparent'
                    : 'bg-white/5 border border-white/10 hover:border-cyan-500/50'
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
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 border-transparent'
                    : 'bg-white/5 border border-white/10 hover:border-cyan-500/50'
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
            className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 input-glow transition-all"
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
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 border-transparent'
                    : 'bg-white/5 border border-white/10 hover:border-cyan-500/50'
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
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 border-transparent'
                    : 'bg-white/5 border border-white/10 hover:border-cyan-500/50'
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
            className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 input-glow transition-all"
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
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 border-transparent'
                    : 'bg-white/5 border border-white/10 hover:border-cyan-500/50'
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
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 border-transparent'
                    : 'bg-white/5 border border-white/10 hover:border-cyan-500/50'
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
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 border-transparent'
                    : 'bg-white/5 border border-white/10 hover:border-cyan-500/50'
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
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 border-transparent'
                    : 'bg-white/5 border border-white/10 hover:border-cyan-500/50'
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
            className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 input-glow transition-all resize-none"
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
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 border-transparent'
                    : 'bg-white/5 border border-white/10 hover:border-cyan-500/50'
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
            className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 input-glow transition-all resize-none"
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
            className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 input-glow transition-all"
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
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 border-transparent'
                    : 'bg-white/5 border border-white/10 hover:border-cyan-500/50'
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
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 border-transparent'
                    : 'bg-white/5 border border-white/10 hover:border-cyan-500/50'
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
            className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 input-glow transition-all resize-none"
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
              className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 input-glow transition-all resize-none"
            />
          </div>
        )}
      </div>
    </motion.div>
  )

  if (isSubmitted) {
    return (
      <div className="min-h-screen space-bg flex items-center justify-center p-4 relative overflow-hidden">
        {/* Space Elements */}
        <div className="stars stars-small"></div>
        <div className="stars stars-medium"></div>
        <div className="stars stars-large"></div>
        <div className="nebula nebula-1"></div>
        <div className="nebula nebula-2"></div>
        
        {/* Rocket Flying Toward Screen */}
        {!showSupernova && (
          <motion.div
            initial={{ scale: 0.1, y: 200, opacity: 0 }}
            animate={{ scale: 15, y: -100, opacity: [0, 1, 1, 0] }}
            transition={{ duration: 1.5, ease: "easeIn" }}
            className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
          >
            <span className="text-6xl" style={{ transform: 'rotate(45deg)' }}>🚀</span>
          </motion.div>
        )}

        {/* Supernova Explosion - Neon Cyan/Blue */}
        {showSupernova && !showSuccessContent && (
          <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
            {/* Screen flash */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-cyan-400"
            />
            
            {/* Core explosion - Neon Cyan */}
            <motion.div
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: [0, 2, 6], opacity: [1, 1, 0] }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute w-40 h-40 rounded-full"
              style={{
                background: 'radial-gradient(circle, #fff 0%, #00ffff 15%, #00bcd4 30%, #0099ff 50%, #0066ff 70%, transparent 85%)',
                boxShadow: '0 0 60px #00ffff, 0 0 120px #00bcd4, 0 0 180px #0099ff, 0 0 240px #00ffff, 0 0 300px #fff'
              }}
            />
            
            {/* Secondary pulse ring */}
            <motion.div
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: [0, 4, 12], opacity: [0.8, 0.5, 0] }}
              transition={{ duration: 1.5, delay: 0.1, ease: "easeOut" }}
              className="absolute w-32 h-32 rounded-full border-4 border-cyan-300"
              style={{
                boxShadow: '0 0 40px #00ffff, inset 0 0 40px #00ffff'
              }}
            />
            
            {/* Third pulse ring */}
            <motion.div
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: [0, 6, 18], opacity: [0.6, 0.3, 0] }}
              transition={{ duration: 1.8, delay: 0.2, ease: "easeOut" }}
              className="absolute w-24 h-24 rounded-full border-2 border-blue-400"
              style={{
                boxShadow: '0 0 30px #0099ff'
              }}
            />

            {/* Neon particle rings */}
            {[...Array(16)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                animate={{ 
                  x: Math.cos(i * 22.5 * Math.PI / 180) * 400,
                  y: Math.sin(i * 22.5 * Math.PI / 180) * 400,
                  scale: [1, 0.5],
                  opacity: [1, 0]
                }}
                transition={{ duration: 1.2, delay: i * 0.02, ease: "easeOut" }}
                className="absolute w-3 h-3 rounded-full"
                style={{
                  background: i % 3 === 0 ? '#00ffff' : i % 3 === 1 ? '#ff00ff' : '#00ff88',
                  boxShadow: `0 0 20px ${i % 3 === 0 ? '#00ffff' : i % 3 === 1 ? '#ff00ff' : '#00ff88'}, 0 0 40px ${i % 3 === 0 ? '#00ffff' : i % 3 === 1 ? '#ff00ff' : '#00ff88'}`
                }}
              />
            ))}

            {/* Starburst neon lines */}
            {[...Array(24)].map((_, i) => (
              <motion.div
                key={`line-${i}`}
                initial={{ scaleX: 0, opacity: 1 }}
                animate={{ scaleX: [0, 1, 1.5], opacity: [1, 1, 0] }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="absolute h-1 origin-center"
                style={{
                  width: '300px',
                  background: i % 2 === 0 
                    ? 'linear-gradient(to right, transparent, #00ffff, #fff, #00ffff, transparent)' 
                    : 'linear-gradient(to right, transparent, #ff00ff, #fff, #ff00ff, transparent)',
                  transform: `rotate(${i * 15}deg)`,
                  boxShadow: i % 2 === 0 ? '0 0 10px #00ffff' : '0 0 10px #ff00ff'
                }}
              />
            ))}

            {/* Sparkle emojis flying out */}
            {[...Array(12)].map((_, i) => (
              <motion.span
                key={`spark-${i}`}
                initial={{ x: 0, y: 0, scale: 0, opacity: 1, rotate: 0 }}
                animate={{ 
                  x: Math.cos(i * 30 * Math.PI / 180) * 300,
                  y: Math.sin(i * 30 * Math.PI / 180) * 300,
                  scale: [0, 1.5, 0],
                  opacity: [0, 1, 0],
                  rotate: 360
                }}
                transition={{ duration: 1.5, delay: 0.2 + i * 0.05, ease: "easeOut" }}
                className="absolute text-2xl"
              >
                {i % 3 === 0 ? '✨' : i % 3 === 1 ? '💫' : '⭐'}
              </motion.span>
            ))}
          </div>
        )}

        {/* Success Content */}
        <AnimatePresence>
          {showSuccessContent && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', damping: 15, stiffness: 200 }}
              className="glass rounded-3xl p-12 text-center max-w-md relative z-10"
            >
              {/* Glowing success icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: 'spring', damping: 10 }}
                className="relative mx-auto mb-6"
              >
                <div className="w-28 h-28 rounded-full flex items-center justify-center mx-auto relative">
                  {/* Animated rings */}
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.2, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-full border-4 border-cyan-400"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    className="absolute inset-0 rounded-full border-2 border-cyan-300"
                  />
                  <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center success-glow">
                    <FaCheckCircle className="text-white text-5xl" />
                  </div>
                </div>
                {/* Sparkles */}
                {[...Array(6)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                    className="absolute text-xl"
                    style={{
                      top: `${20 + Math.sin(i * 60 * Math.PI / 180) * 50}%`,
                      left: `${50 + Math.cos(i * 60 * Math.PI / 180) * 60}%`,
                    }}
                  >
                    ✨
                  </motion.span>
                ))}
              </motion.div>
              
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-3xl font-bold text-white mb-2"
              >
                Амжилттай! 🎉
              </motion.h2>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-cyan-300 text-lg mb-4"
              >
                Таны хүсэлт сансарт хүрлээ!
              </motion.p>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-white/60 mb-8"
              >
                Бид тантай удахгүй холбогдох болно ✨
              </motion.p>
              
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setIsSubmitted(false)
                  setShowSupernova(false)
                  setShowSuccessContent(false)
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
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold btn-glow flex items-center gap-2 mx-auto"
              >
                <span>🛸</span> Шинэ хүсэлт илгээх
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  return (
    <div className="min-h-screen space-bg relative overflow-hidden">
      {/* Space Background Elements */}
      <div className="stars stars-small"></div>
      <div className="stars stars-medium"></div>
      <div className="stars stars-large"></div>
      
      {/* Nebula Effects */}
      <div className="nebula nebula-1"></div>
      <div className="nebula nebula-2"></div>
      <div className="nebula nebula-3"></div>
      
      {/* Meteors */}
      <div className="meteor meteor-1"></div>
      <div className="meteor meteor-2"></div>
      <div className="meteor meteor-3"></div>
      
      {/* Planets */}
      <div className="planet planet-1"></div>
      <div className="planet planet-2"></div>
      <div className="planet planet-saturn"></div>
      
      {/* Orbit Rings */}
      <div className="orbit-ring orbit-ring-1"></div>
      <div className="orbit-ring orbit-ring-2"></div>
      
      {/* Aurora Effect */}
      <div className="aurora"></div>

      <div className="relative z-10 container mx-auto px-4 py-8 md:py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">
              Вебсайт Захиалга
            </h1>
          </div>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Сансрын аялалд тавтай морил! Таны бизнест зориулсан мэргэжлийн вебсайт бүтээцгээе ✨
          </p>
        </motion.div>

        {/* Progress Bar with Rocket */}
        <div className="max-w-2xl mx-auto mb-8 px-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-cyan-300 text-sm font-medium">Алхам {currentStep + 1} / {steps.length}</span>
            <span className="text-cyan-300 text-sm font-medium">{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
          </div>
          <div className="relative h-4 bg-white/10 rounded-full overflow-visible">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full relative"
            >
              {/* Rocket with Fire Effect */}
              <div className="absolute -right-6 top-1/2 -translate-y-1/2 flex items-center">
                {/* Fire/Flame Effect */}
                <div className="flame-container">
                  <div className="flame flame-1"></div>
                  <div className="flame flame-2"></div>
                  <div className="flame flame-3"></div>
                </div>
                {/* Rocket pointing right → */}
                <span className="text-2xl relative z-10 rocket-glow" style={{ transform: 'rotate(45deg)' }}>🚀</span>
              </div>
            </motion.div>
          </div>
          <p className="text-white/50 text-xs mt-2 text-center">{steps[currentStep]?.title}</p>
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
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
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
                  className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold btn-glow"
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin" /> Илгээж байна...
                    </>
                  ) : (
                    <>
                      <FaRocket className="rocket-icon" /> Илгээх
                    </>
                  )}
                </motion.button>
              ) : (
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={nextStep}
                  className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold btn-glow"
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
          className="text-center mt-12 text-cyan-300/40 text-sm"
        >
          <p>© 2026 Вебсайт Захиалга | Бүх эрх хуулиар хамгаалагдсан</p>
        </motion.div>
      </div>
    </div>
  )
}
