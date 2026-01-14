"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Scale,
  AlertCircle,
  CheckCircle,
  Shield,
  Users,
  Briefcase,
  Gavel,
  Info,
  Globe,
  Link2,
  Copyright,
  Mail,
} from "lucide-react";

export default function TermsPage() {
  const termsHighlights = [
    {
      icon: CheckCircle,
      title: "Service Agreement",
      description: "Clear terms for our digital services",
    },
    {
      icon: Shield,
      title: "User Rights",
      description: "Your rights and responsibilities",
    },
    {
      icon: Briefcase,
      title: "Business Terms",
      description: "Commercial terms and conditions",
    },
    {
      icon: Gavel,
      title: "Legal Protection",
      description: "Legal framework and dispute resolution",
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
                <Scale className="w-10 h-10 text-cyan-400" />
              </div>
            </motion.div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Terms & Conditions
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Please read these terms carefully before using our services. By
              using our services, you agree to these terms.
            </p>
            <div className="flex items-center justify-center gap-2 text-slate-400 text-sm">
              <FileText className="w-4 h-4" />
              <span>Last Updated: January 2026</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {termsHighlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <motion.div
                  key={highlight.title}
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
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {highlight.description}
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
                      <Scale className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2">
                        Terms & Conditions Document
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
                      className="mb-10 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 rounded-2xl p-6 lg:p-8 border border-amber-100 shadow-sm"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <AlertCircle className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-slate-800 mb-3">
                            Welcome to STARSYNX PVT LTD
                          </h3>
                          <p className="leading-relaxed mb-4 text-slate-700">
                            These Terms and Conditions govern your access to and
                            use of the website{" "}
                            <a
                              href="https://starsynx.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-cyan-600 hover:text-cyan-700 font-semibold"
                            >
                              https://starsynx.com
                            </a>
                            , along with any related services, content, or
                            communications provided by STARSYNX PVT LTD
                            ("Company," "we," "us," or "our"). By accessing or
                            using our website or services, you confirm that you
                            have read, understood, and agree to be legally bound
                            by these Terms and Conditions. If you do not agree,
                            you should not use our website or services.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Services Description */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="bg-white rounded-xl p-6 lg:p-8 mb-6 border-l-4 border-blue-500 shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Briefcase className="w-5 h-5 text-blue-600" />
                        </div>
                        Our Services
                      </h3>
                      <p className="leading-relaxed text-slate-700 pl-13">
                        STARSYNX PVT LTD is a global digital solutions company
                        offering services including web development, mobile
                        application development, UI/UX design, AI and machine
                        learning solutions, API integration and automation, ERP
                        and CRM solutions, SEO services, digital marketing, and
                        social media management. Our services are available to
                        clients worldwide, regardless of location.
                      </p>
                    </motion.div>

                    {/* Affiliated Websites */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
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
                          STARSYNX PVT LTD owns, operates, and manages multiple
                          digital platforms and brands, including but not limited
                          to{" "}
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
                          . These websites are official properties of STARSYNX PVT
                          LTD, and any services, content, transactions, or
                          communications conducted through these websites are
                          governed by the policies, terms, and legal ownership of
                          STARSYNX PVT LTD. Unauthorized use, imitation, or
                          misrepresentation of these brands, websites, or
                          associated services is strictly prohibited and may result
                          in legal action.
                        </p>
                      </div>
                    </motion.div>

                    {/* User Obligations */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="bg-white rounded-xl p-6 lg:p-8 mb-6 border-l-4 border-indigo-500 shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                        <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                          <Users className="w-5 h-5 text-indigo-600" />
                        </div>
                        User Obligations
                      </h3>
                      <p className="leading-relaxed text-slate-700 pl-13">
                        By using this website, you agree to use it only for lawful
                        purposes and in a manner that does not violate any
                        applicable laws or regulations. You must not attempt to
                        gain unauthorized access to any part of the website,
                        interfere with its functionality, introduce harmful
                        software, or misuse any content or data. STARSYNX PVT LTD
                        reserves the right to suspend or terminate access to the
                        website if misuse or unauthorized activity is detected.
                      </p>
                    </motion.div>

                    {/* Quotes and Estimates */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 lg:p-8 mb-6 border border-cyan-200 shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                        <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-cyan-600" />
                        </div>
                        Quotes and Estimates
                      </h3>
                      <div className="bg-white rounded-lg p-4 border-l-2 border-cyan-400 pl-13">
                        <p className="leading-relaxed text-slate-700">
                          Any free quote, estimate, or consultation provided by
                          STARSYNX PVT LTD is for informational purposes only and
                          does not constitute a binding offer. Final pricing,
                          project scope, timelines, and deliverables are
                          confirmed only after mutual agreement through a written
                          contract or official communication. STARSYNX PVT LTD
                          reserves the right to accept or decline any project at
                          its sole discretion.
                        </p>
                      </div>
                    </motion.div>

                    {/* Intellectual Property */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 lg:p-8 mb-6 border border-purple-200 shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <Copyright className="w-5 h-5 text-purple-600" />
                        </div>
                        Intellectual Property
                      </h3>
                      <div className="bg-white rounded-lg p-4 border-l-2 border-purple-400 pl-13">
                        <p className="leading-relaxed text-slate-700">
                          All content available on this website, including but not
                          limited to text, images, graphics, logos, designs,
                          layouts, icons, software code, and digital media, is the
                          intellectual property of STARSYNX PVT LTD unless
                          otherwise stated. All rights to the STARSYNX PVT LTD
                          name, logos, and trademarks are fully reserved. You may
                          view and use website content for personal or business
                          evaluation purposes only. Any reproduction, modification,
                          distribution, public display, or commercial use of this
                          content, logos, or trademarks without prior written
                          permission from STARSYNX PVT LTD is strictly prohibited.
                        </p>
                      </div>
                    </motion.div>

                    {/* Third-Party Links */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="bg-white rounded-xl p-6 lg:p-8 mb-6 border-l-4 border-slate-400 shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                          <Link2 className="w-5 h-5 text-slate-600" />
                        </div>
                        Third-Party Links
                      </h3>
                      <p className="leading-relaxed text-slate-700 pl-13">
                        This website may contain links to third-party websites or
                        services for your convenience. STARSYNX PVT LTD does not
                        control, endorse, or assume responsibility for the
                        content, privacy policies, or practices of any third-party
                        websites. Accessing such links is done at your own risk,
                        and STARSYNX PVT LTD shall not be liable for any loss or
                        damage arising from their use.
                      </p>
                    </motion.div>

                    {/* Disclaimer */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 lg:p-8 mb-6 border border-orange-200 shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                          <AlertCircle className="w-5 h-5 text-orange-600" />
                        </div>
                        Disclaimer
                      </h3>
                      <div className="bg-white rounded-lg p-4 border-l-2 border-orange-400 pl-13">
                        <p className="leading-relaxed text-slate-700">
                          All information and services provided on this website are
                          offered on an "as is" and "as available" basis. While
                          STARSYNX PVT LTD strives to ensure accuracy and
                          reliability, we make no warranties or guarantees
                          regarding the completeness, accuracy, or suitability of
                          any content or service. To the fullest extent permitted
                          by law, STARSYNX PVT LTD disclaims all liability for any
                          direct, indirect, incidental, consequential, or special
                          damages arising from your use of or inability to use the
                          website or services.
                        </p>
                      </div>
                    </motion.div>

                    {/* Certifications */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.8 }}
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
                          STARSYNX PVT LTD is a legally registered and compliant
                          business entity. The company is certified and registered
                          with the Federal Board of Revenue (FBR), Pakistan
                          Software Export Board (PSEB), Securities and Exchange
                          Commission of Pakistan (SECP), and the Lahore Chamber
                          of Commerce and Industry (LCCI). These registrations
                          confirm our legitimacy, compliance, and commitment to
                          professional business practices.
                        </p>
                      </div>
                    </motion.div>

                    {/* Limitation of Liability */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.9 }}
                      className="bg-white rounded-xl p-6 lg:p-8 mb-6 border-l-4 border-red-500 shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                          <Gavel className="w-5 h-5 text-red-600" />
                        </div>
                        Limitation of Liability
                      </h3>
                      <p className="leading-relaxed text-slate-700 pl-13">
                        STARSYNX PVT LTD shall not be liable for any delays,
                        failures, or interruptions caused by events beyond our
                        reasonable control, including but not limited to natural
                        disasters, technical failures, cyber incidents, or
                        governmental actions.
                      </p>
                    </motion.div>

                    {/* Changes to Terms */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 1.0 }}
                      className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 lg:p-8 mb-6 border border-blue-200 shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-blue-600" />
                        </div>
                        Changes to Terms
                      </h3>
                      <div className="bg-white rounded-lg p-4 border-l-2 border-blue-400 pl-13">
                        <p className="leading-relaxed text-slate-700">
                          STARSYNX PVT LTD reserves the right to modify or update
                          these Terms and Conditions at any time without prior
                          notice. Any changes will become effective immediately
                          upon posting on this page. Continued use of the website
                          after such changes constitutes your acceptance of the
                          updated Terms and Conditions.
                        </p>
                      </div>
                    </motion.div>

                    {/* Severability */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 1.1 }}
                      className="bg-white rounded-xl p-6 lg:p-8 mb-6 border-l-4 border-teal-500 shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                        <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                          <Scale className="w-5 h-5 text-teal-600" />
                        </div>
                        Severability
                      </h3>
                      <p className="leading-relaxed text-slate-700 pl-13">
                        If any provision of these Terms and Conditions is found to
                        be invalid or unenforceable, the remaining provisions
                        shall continue in full force and effect.
                      </p>
                    </motion.div>

                    {/* Governing Law */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 1.2 }}
                      className="bg-white rounded-xl p-6 lg:p-8 mb-6 border-l-4 border-slate-500 shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                          <Gavel className="w-5 h-5 text-slate-600" />
                        </div>
                        Governing Law
                      </h3>
                      <p className="leading-relaxed text-slate-700 pl-13">
                        These Terms and Conditions shall be governed by and
                        construed in accordance with applicable laws. Any disputes
                        arising from the use of this website or services shall be
                        subject to the appropriate legal jurisdiction.
                      </p>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 1.3 }}
                    >
                      <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                        <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                          <Mail className="w-5 h-5 text-cyan-600" />
                        </div>
                        Contact Information
                      </h3>
                      <div className="bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 rounded-2xl p-6 lg:p-8 border border-cyan-200 shadow-lg">
                        <p className="leading-relaxed text-slate-700 mb-4 pl-13">
                          For any questions or concerns regarding these Terms and
                          Conditions, you may contact STARSYNX PVT LTD at:
                        </p>
                        <div className="bg-white rounded-lg p-4 border-l-4 border-cyan-500 shadow-sm">
                          <a
                            href="mailto:contact@starsynx.com"
                            className="text-cyan-600 hover:text-cyan-700 font-semibold text-lg transition-colors"
                          >
                            contact@starsynx.com
                          </a>
                        </div>
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
