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
              <span>
                Last Updated: {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
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
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-6 lg:p-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                      <Scale className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-1">
                        Terms & Conditions Document
                      </h2>
                      <p className="text-cyan-100 text-sm">
                        STARSYNX (PVT) LTD.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 space-y-8">
                  {/* Introduction */}
                  <div className="prose prose-lg max-w-none">
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-8">
                      <div className="flex items-start gap-4">
                        <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-lg font-semibold text-slate-800 mb-2">
                            Important Notice
                          </h3>
                          <p className="text-slate-700 leading-relaxed">
                            Please add the content from{" "}
                            <strong>
                              STARSYNX PVT LTD Terms & Conditions.docx
                            </strong>{" "}
                            here. The content from the Word document should be
                            pasted in this section. You can format it with
                            proper headings, paragraphs, and lists as needed.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-8">
                      {/* Section Template */}
                      <div className="border-b border-slate-200 pb-6">
                        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                          <Users className="w-5 h-5 text-cyan-500" />
                          Acceptance of Terms
                        </h3>
                        <p className="text-slate-700 leading-relaxed">
                          Add your content here...
                        </p>
                      </div>

                      <div className="border-b border-slate-200 pb-6">
                        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                          <Briefcase className="w-5 h-5 text-cyan-500" />
                          Services Description
                        </h3>
                        <p className="text-slate-700 leading-relaxed">
                          Add your content here...
                        </p>
                      </div>

                      <div className="border-b border-slate-200 pb-6">
                        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                          <Shield className="w-5 h-5 text-cyan-500" />
                          User Obligations
                        </h3>
                        <p className="text-slate-700 leading-relaxed">
                          Add your content here...
                        </p>
                      </div>

                      <div className="border-b border-slate-200 pb-6">
                        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                          <Gavel className="w-5 h-5 text-cyan-500" />
                          Limitation of Liability
                        </h3>
                        <p className="text-slate-700 leading-relaxed">
                          Add your content here...
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                          <Info className="w-5 h-5 text-cyan-500" />
                          Contact Information
                        </h3>
                        <p className="text-slate-700 leading-relaxed">
                          If you have any questions about these Terms &
                          Conditions, please contact us at{" "}
                          <a
                            href="mailto:contact@starsynx.com"
                            className="text-cyan-600 hover:text-cyan-700 font-medium"
                          >
                            contact@starsynx.com
                          </a>
                        </p>
                      </div>
                    </div>
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
