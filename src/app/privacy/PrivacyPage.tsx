"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, Mail, Database, Users, Globe, Info } from "lucide-react";

export default function PrivacyPage() {
  const privacyFeatures = [
    {
      icon: Shield,
      title: "Data Protection",
      description: "We use industry-standard security measures to protect your data",
    },
    {
      icon: Lock,
      title: "Secure Storage",
      description: "Your information is stored securely and encrypted",
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "We're transparent about how we collect and use your data",
    },
    {
      icon: Users,
      title: "Your Rights",
      description: "You have full control over your personal information",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-block mb-6"
            >
              <div className="w-20 h-20 bg-cyan-400/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <Shield className="w-10 h-10 text-cyan-400" />
              </div>
            </motion.div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              STARSYNX (PVT) LTD. is committed to protecting your privacy and
              personal information. Your trust is our priority.
            </p>
            <div className="flex items-center justify-center gap-2 text-slate-400 text-sm">
              <FileText className="w-4 h-4" />
              <span>Last Updated: January 2026</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {privacyFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200"
                >
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-white via-slate-50 to-white rounded-3xl shadow-2xl border border-slate-200/50 overflow-hidden backdrop-blur-sm">
                {/* Header */}
                <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-600 p-6 lg:p-10 relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-300/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
                  
                  <div className="relative z-10 flex items-center gap-4">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md shadow-lg border border-white/30">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2">
                        Privacy Policy Document
                      </h2>
                      <p className="text-cyan-100 text-base font-medium">
                        STARSYNX (PVT) LTD.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6 lg:p-12 bg-gradient-to-b from-white to-slate-50/50">
                  <div className="prose prose-lg max-w-none text-slate-700">
                    {/* Introduction */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="mb-10 bg-gradient-to-br from-cyan-50 via-blue-50 to-cyan-50 rounded-2xl p-6 lg:p-8 border border-cyan-100 shadow-sm"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Info className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-slate-800 mb-3">
                            Introduction
                          </h3>
                          <p className="leading-relaxed mb-4 text-slate-700">
                            The website (&quot;Site&quot;) for STARSYNX PVT LTD (&quot;STARSYNX,&quot;
                            &quot;We,&quot; &quot;Our,&quot; &quot;Us,&quot; or &quot;Company&quot;) was created to provide
                            digital solutions and IT services (the &quot;Services&quot;).
                          </p>
                          <p className="leading-relaxed text-slate-700">
                            The privacy of our website visitors (&quot;you,&quot; &quot;your,&quot; or
                            &quot;User&quot;) is extremely important to us. This Privacy
                            Policy explains the types of information we collect, how
                            we use it, and the choices you have regarding your
                            personal information. By accessing or using our Site or
                            Services, or by submitting information to STARSYNX PVT
                            LTD, you signify your acceptance of this Privacy Policy.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Updates and Changes */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="bg-white rounded-xl p-6 lg:p-8 mb-6 border-l-4 border-cyan-500 shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                        <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-cyan-600" />
                        </div>
                        Updates and Changes to the Privacy Policy
                      </h3>
                      <p className="leading-relaxed text-slate-700 pl-13">
                        We may update this Privacy Policy from time to time to
                        reflect changes in our practices, legal requirements, or
                        our Services. The &quot;Last Updated&quot; date at the top will be
                        revised accordingly. If a material change affects how we
                        collect or use personal information, we will notify you
                        via email or post a notice on the homepage of our Site.
                        Continued use of our Services after such posting
                        constitutes your acceptance of the updated Privacy
                        Policy.
                      </p>
                    </motion.div>

                    {/* Information We Collect */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 lg:p-8 mb-6 border border-slate-200 shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Database className="w-5 h-5 text-blue-600" />
                        </div>
                        Information We Collect
                      </h3>
                      <div className="space-y-4 pl-13">
                        <div className="bg-white rounded-lg p-4 border-l-2 border-blue-400">
                          <p className="leading-relaxed text-slate-700">
                            To provide our Services, we may collect certain
                            personal information from you, including but not
                            limited to your name, email address, phone number,
                            company information, and other details required for
                            communication or service delivery.
                          </p>
                        </div>
                        <div className="bg-white rounded-lg p-4 border-l-2 border-cyan-400">
                          <p className="leading-relaxed text-slate-700">
                            We may also collect information automatically through
                            log files, cookies, web beacons, or other technologies,
                            including your IP address, device type, browser type,
                            referring/exit pages, and pages accessed on our Site.
                            This information helps us improve our website, Services,
                            and user experience.
                          </p>
                        </div>
                        <div className="bg-white rounded-lg p-4 border-l-2 border-indigo-400">
                          <p className="leading-relaxed text-slate-700">
                            When you contact us through the Site for inquiries,
                            feedback, or job applications, we may collect your name,
                            email address, and any information you provide. This
                            information is used solely to respond to your inquiries
                            or process your application and is not stored
                            unnecessarily.
                          </p>
                        </div>
                        <div className="bg-white rounded-lg p-4 border-l-2 border-purple-400">
                          <p className="leading-relaxed text-slate-700">
                            For identity verification purposes, certain information
                            may be collected securely through third-party service
                            providers. STARSYNX PVT LTD does not store or use any
                            personal information submitted to third-party
                            verification providers beyond the verification process
                            itself.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* How and Why We Use Information */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="bg-white rounded-xl p-6 lg:p-8 mb-6 border-l-4 border-indigo-500 shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                        <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                          <Globe className="w-5 h-5 text-indigo-600" />
                        </div>
                        How and Why We Use Information
                      </h3>
                      <div className="space-y-4 pl-13">
                        <p className="leading-relaxed text-slate-700">
                          We use the information we collect to provide and
                          improve our Services, communicate with you, verify your
                          identity, respond to inquiries, and comply with legal
                          obligations.
                        </p>
                        <p className="leading-relaxed text-slate-700">
                          If you provide additional information voluntarily,
                          including through surveys or feedback forms, you consent
                          to its use consistent with this Privacy Policy.
                          Information collected from third-party sources may also
                          be combined with your personal data for service
                          delivery purposes, and such combined information will be
                          treated as personal information.
                        </p>
                      </div>
                    </motion.div>

                    {/* Cookies and Tracking */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 lg:p-8 mb-6 border border-amber-200 shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                        <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                          <Eye className="w-5 h-5 text-amber-600" />
                        </div>
                        Cookies and Tracking Technologies
                      </h3>
                      <div className="space-y-4 pl-13">
                        <p className="leading-relaxed text-slate-700">
                          We may use cookies, web beacons, page tags, and similar
                          technologies to enhance your experience, provide
                          authentication, and monitor Site usage. Cookies help
                          the Site remember your preferences and improve
                          functionality.
                        </p>
                        <p className="leading-relaxed text-slate-700">
                          You can manage or disable cookies via your browser
                          settings, but some features of the Site may not function
                          properly without cookies. Web beacons and server logs
                          may also be used to track usage patterns, assess website
                          performance, and improve our Services.
                        </p>
                      </div>
                    </motion.div>

                    {/* Social Media Integration */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="bg-white rounded-xl p-6 lg:p-8 mb-6 border-l-4 border-pink-500 shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                        <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                          <Users className="w-5 h-5 text-pink-600" />
                        </div>
                        Social Media Integration
                      </h3>
                      <p className="leading-relaxed text-slate-700 pl-13">
                        Our Site may allow you to log in or interact via social
                        media platforms. These integrations may collect certain
                        personal information, such as your name and email address,
                        and are governed by the privacy policies of the respective
                        social media providers.
                      </p>
                    </motion.div>

                    {/* Notifications and Communications */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 lg:p-8 mb-6 border border-purple-200 shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <Mail className="w-5 h-5 text-purple-600" />
                        </div>
                        Notifications and Communications
                      </h3>
                      <div className="space-y-4 pl-13">
                        <div className="bg-white rounded-lg p-4 border-l-2 border-purple-400">
                          <p className="leading-relaxed text-slate-700">
                            We may send you email or SMS notifications regarding
                            your account, service updates, system alerts, or
                            promotional offers if you opt in. Mandatory service
                            communications, such as account confirmations or
                            security alerts, cannot be opted out of.
                          </p>
                        </div>
                        <div className="bg-white rounded-lg p-4 border-l-2 border-pink-400">
                          <p className="leading-relaxed text-slate-700">
                            We will never request sensitive login credentials via
                            email. You are responsible for protecting your account
                            information.
                          </p>
                        </div>
                        <div className="bg-white rounded-lg p-4 border-l-2 border-indigo-400">
                          <p className="leading-relaxed text-slate-700">
                            You may opt out of marketing emails at any time by
                            following the unsubscribe instructions provided.
                            Opt-out requests may take up to 24 hours to process.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Data Security */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 lg:p-8 mb-6 border border-green-200 shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <Lock className="w-5 h-5 text-green-600" />
                        </div>
                        Data Security
                      </h3>
                      <p className="leading-relaxed text-slate-700 pl-13">
                        We use commercially reasonable security measures to
                        protect your personal information from unauthorized
                        access, use, or disclosure. While we strive to safeguard
                        your data, we cannot guarantee absolute security. In the
                        event of a security breach, we may notify you
                        electronically or via the Site to take protective
                        measures.
                      </p>
                    </motion.div>

                    {/* Accessing and Correcting Information */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="bg-white rounded-xl p-6 lg:p-8 mb-6 border-l-4 border-teal-500 shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                        <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                          <Shield className="w-5 h-5 text-teal-600" />
                        </div>
                        Accessing and Correcting Information
                      </h3>
                      <div className="space-y-4 pl-13">
                        <p className="leading-relaxed text-slate-700">
                          You may contact us to review, update, or correct your
                          personal information. We encourage all users to
                          regularly verify the accuracy of their data.
                        </p>
                        <div className="bg-teal-50 rounded-lg p-4 border-l-2 border-teal-400">
                          <p className="leading-relaxed text-slate-700">
                            For questions or corrections, please email{" "}
                            <a
                              href="mailto:contact@starsynx.com"
                              className="text-cyan-600 hover:text-cyan-700 font-semibold transition-colors"
                            >
                              contact@starsynx.com
                            </a>
                            .
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Links to Other Sites */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.9 }}
                      className="bg-white rounded-xl p-6 lg:p-8 mb-6 border-l-4 border-slate-400 shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                          <Globe className="w-5 h-5 text-slate-600" />
                        </div>
                        Links to Other Sites
                      </h3>
                      <p className="leading-relaxed text-slate-700 pl-13">
                        Our Site may contain links to third-party websites. This
                        Privacy Policy does not apply to those websites, and
                        STARSYNX PVT LTD is not responsible for their privacy
                        practices or content.
                      </p>
                    </motion.div>

                    {/* International Users */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 1.0 }}
                      className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 lg:p-8 mb-6 border border-blue-200 shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Globe className="w-5 h-5 text-blue-600" />
                        </div>
                        International Users
                      </h3>
                      <p className="leading-relaxed text-slate-700 pl-13">
                        Our Services are available worldwide. By providing
                        personal information, you consent to the transfer and
                        storage of your data in countries where STARSYNX PVT LTD
                        operates, including Pakistan, UAE, Australia, and other
                        regions. Users in jurisdictions with stricter privacy
                        laws, including the EU or the U.S., consent to this
                        transfer.
                      </p>
                    </motion.div>

                    {/* Children's Privacy */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 1.1 }}
                      className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 lg:p-8 mb-6 border border-red-200 shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                          <Shield className="w-5 h-5 text-red-600" />
                        </div>
                        Children&apos;s Privacy
                      </h3>
                      <p className="leading-relaxed text-slate-700 pl-13">
                        Our Site is not intended for use by children under 18
                        years of age. We do not knowingly collect personal
                        information from minors. If you believe a minor has
                        provided personal information, please contact{" "}
                        <a
                          href="mailto:contact@starsynx.com"
                          className="text-cyan-600 hover:text-cyan-700 font-semibold transition-colors"
                        >
                          contact@starsynx.com
                        </a>{" "}
                        immediately.
                      </p>
                    </motion.div>

                    {/* Affiliated Websites */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 1.2 }}
                      className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-6 lg:p-8 mb-6 border border-violet-200 shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                        <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center">
                          <Globe className="w-5 h-5 text-violet-600" />
                        </div>
                        Affiliated Websites and Brands
                      </h3>
                      <div className="bg-white rounded-lg p-4 border-l-2 border-violet-400 pl-13">
                        <p className="leading-relaxed text-slate-700">
                          STARSYNX PVT LTD owns and manages{" "}
                          <a
                            href="https://www.tadow.shop"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-600 hover:text-cyan-700 font-semibold transition-colors"
                          >
                            www.tadow.shop
                          </a>{" "}
                          and{" "}
                          <a
                            href="https://www.bookbyte.store"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-600 hover:text-cyan-700 font-semibold transition-colors"
                          >
                            www.bookbyte.store
                          </a>
                          . Any services, content, or communications on these
                          platforms are governed by the policies and legal ownership
                          of STARSYNX PVT LTD.
                        </p>
                      </div>
                    </motion.div>

                    {/* Certifications */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 1.3 }}
                      className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 lg:p-8 mb-6 border border-emerald-200 shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                        <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                          <Shield className="w-5 h-5 text-emerald-600" />
                        </div>
                        Certifications and Registrations
                      </h3>
                      <div className="bg-white rounded-lg p-4 border-l-2 border-emerald-400 pl-13">
                        <p className="leading-relaxed text-slate-700">
                          STARSYNX PVT LTD is registered and certified with the
                          Federal Board of Revenue (FBR), Pakistan Software Export
                          Board (PSEB), Securities and Exchange Commission of
                          Pakistan (SECP), and the Lahore Chamber of Commerce and
                          Industry (LCCI). These certifications confirm our
                          compliance, credibility, and commitment to professional
                          business practices.
                        </p>
                      </div>
                    </motion.div>

                    {/* Governing Law */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 1.4 }}
                      className="bg-white rounded-xl p-6 lg:p-8 mb-6 border-l-4 border-slate-500 shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-slate-600" />
                        </div>
                        Governing Law
                      </h3>
                      <p className="leading-relaxed text-slate-700 pl-13">
                        This Privacy Policy shall be governed by and construed in
                        accordance with the laws of Pakistan. Any disputes
                        regarding personal information shall fall under the
                        appropriate jurisdiction of Pakistan.
                      </p>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                        <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                          <Mail className="w-5 h-5 text-cyan-600" />
                        </div>
                        Contact Information
                      </h3>
                      <p className="leading-relaxed mb-6 text-slate-700 pl-13">
                        For questions or concerns regarding this Privacy Policy,
                        your personal information, or your privacy rights, please
                        contact STARSYNX PVT LTD at:
                      </p>
                      <div className="bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 rounded-2xl p-6 lg:p-8 space-y-4 border border-cyan-200 shadow-lg">
                        <div className="bg-white rounded-lg p-4 border-l-4 border-cyan-500 shadow-sm">
                          <p className="leading-relaxed text-slate-700">
                            <strong className="text-slate-800">Email:</strong>{" "}
                            <a
                              href="mailto:contact@starsynx.com"
                              className="text-cyan-600 hover:text-cyan-700 font-semibold transition-colors"
                            >
                              contact@starsynx.com
                            </a>
                          </p>
                        </div>
                        <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500 shadow-sm">
                          <p className="leading-relaxed text-slate-700">
                            <strong className="text-slate-800">Pakistan (Head Office):</strong> Suit No. 9, Izhar Villas, Wafaqi Colony Road,
                            Johar Town, Lahore, Pakistan
                          </p>
                        </div>
                        <div className="bg-white rounded-lg p-4 border-l-4 border-indigo-500 shadow-sm">
                          <p className="leading-relaxed text-slate-700">
                            <strong className="text-slate-800">UAE (Regional Office):</strong> Office M-06, Makeen Building,
                            Al Garhoud, Dubai, UAE
                          </p>
                        </div>
                        <div className="bg-white rounded-lg p-4 border-l-4 border-purple-500 shadow-sm">
                          <p className="leading-relaxed text-slate-700">
                            <strong className="text-slate-800">Australia (Regional Office):</strong> 4/56
                            Henderson Road, Queanbeyan NSW 2620, Canberra Region
                          </p>
                        </div>
                      </div>
                      <div className="mt-6 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-xl p-4 border border-cyan-200">
                        <p className="leading-relaxed text-sm text-slate-700 italic text-center">
                          <strong className="text-slate-800">Global Compliance:</strong> This Privacy Policy is designed for global compliance,
                          covering GDPR, U.S. regulations, and standard
                          international privacy laws.
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
