"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import SplitAboutMetric from '@/components/sections/about/SplitAboutMetric';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Leaf, CheckCircle, Shield, Zap, Heart, Brain, Sparkles, Star, HelpCircle } from 'lucide-react';

export default function MedicalCannabisPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="medium"
      sizing="small"
      background="animatedAurora"
      cardStyle="glass-depth"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="glass"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764082189578-eigeu6po.jpg"
          logoAlt="Medical Cannabis Logo"
          brandName="MedCannabis"
          button={{
            text: "Schedule Consultation",
            href: "contact"
          }}
          className="bg-white border-b border-gray-200"
        />
      </div>

      <div id="hero" data-section="hero" className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        <HeroBillboardCarousel
          title="Medical Cannabis Care For Better Health"
          description="Professional cannabis products prescribed and monitored by licensed healthcare providers. Evidence-based treatment for chronic pain, anxiety, and other medical conditions."
          tag="Healthcare"
          tagIcon={Leaf}
          buttons={[
            {
              text: "Start Consultation",
              href: "contact"
            },
            {
              text: "Learn More",
              href: "about"
            }
          ]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764082191895-3p7290pz.jpg",
              imageAlt: "Cannabis plant medical laboratory research"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764082193909-u4ksntmv.jpg",
              imageAlt: "Medical cannabis products pharmaceutical bottles"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764082195124-s6ppvr1m.jpg",
              imageAlt: "Healthcare professional consultation patient"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764082196241-6ilzqabw.jpg",
              imageAlt: "Cannabis research microscope scientific study"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764082197400-8swru40u.jpg",
              imageAlt: "Medical marijuana production facility"
            }
          ]}
          containerClassName="hero-section"
          titleClassName="text-5xl lg:text-6xl font-bold"
          descriptionClassName="text-lg lg:text-xl"
        />
      </div>

      <div id="about" data-section="about" className="py-20 px-4">
        <SplitAboutMetric
          title="Medical Excellence in Cannabis Care"
          description={[
            "MedCannabis is a fully licensed medical cannabis provider operating in compliance with all state and federal regulations. Our team of board-certified physicians and pharmacists ensures every patient receives personalized, evidence-based treatment plans backed by clinical research and ongoing medical supervision."
          ]}
          metrics={[
            {
              label: "Licensed Healthcare Providers",
              value: "150+"
            },
            {
              label: "Patients Treated Successfully",
              value: "25,000+"
            }
          ]}
          showBorder={false}
          containerClassName="about-section"
        />
      </div>

      <div id="features" data-section="features" className="py-20 bg-white">
        <FeatureCardTwo
          title="Why Choose Medical Cannabis"
          description="Comprehensive therapeutic benefits supported by clinical research and patient outcomes"
          tag="Benefits"
          tagIcon={CheckCircle}
          features={[
            {
              title: "Chronic Pain Management",
              description: "FDA-recognized treatment for chronic pain conditions with proven efficacy and minimal side effects compared to opioids",
              icon: Shield
            },
            {
              title: "Anxiety and Sleep Disorders",
              description: "Natural relief for anxiety, PTSD, and insomnia with personalized dosing under physician supervision",
              icon: Zap
            },
            {
              title: "Nausea and Appetite",
              description: "Clinically proven treatment for chemotherapy-related nausea and appetite stimulation for cancer patients",
              icon: Heart
            },
            {
              title: "Seizure Disorders",
              description: "CBD-based treatments for epilepsy and seizure conditions with established medical protocols",
              icon: Brain
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="two-columns-alternating-heights"
          containerClassName="features-section"
        />
      </div>

      <div id="products" data-section="products" className="py-20 bg-green-50">
        <ProductCardThree
          title="Medical Cannabis Products"
          description="Professionally formulated and tested cannabis products for therapeutic use"
          tag="Pharmaceutical Grade"
          tagIcon={Sparkles}
          products={[
            {
              id: "1",
              name: "Full Spectrum CBD Oil 1000mg",
              price: "$89.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764082198541-m1dferrl.jpg",
              imageAlt: "CBD oil bottle medical pharmaceutical grade",
              initialQuantity: 1
            },
            {
              id: "2",
              name: "Medical Cannabis Capsules",
              price: "$79.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764082199453-nlyf7fmj.jpg",
              imageAlt: "Cannabis capsules medical supplement pills",
              initialQuantity: 1
            },
            {
              id: "3",
              name: "Premium Flower - Therapeutic Blend",
              price: "$99.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764082200586-sl1f58hl.jpg",
              imageAlt: "Medical cannabis flower strain high quality",
              initialQuantity: 1
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          containerClassName="products-section"
        />
      </div>

      <div id="testimonials" data-section="testimonials" className="py-20 bg-white">
        <TestimonialCardOne
          title="Patient and Provider Testimonials"
          description="Real experiences from patients and healthcare professionals who trust MedCannabis"
          tag="Success Stories"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Dr. Sarah Mitchell",
              role: "Pain Management Specialist",
              company: "Clinical Medical Associates",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764082201717-m6y9b3sy.jpg",
              imageAlt: "Dr. Sarah Mitchell professional portrait"
            },
            {
              id: "2",
              name: "James Rodriguez",
              role: "Patient",
              company: "Chronic Pain Treatment Program",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764082203038-69rbw0bi.jpg",
              imageAlt: "James Rodriguez patient testimonial"
            },
            {
              id: "3",
              name: "Jennifer Chen",
              role: "Clinical Pharmacist",
              company: "Wellness Pharmacy",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764082204054-230cd5mi.jpg",
              imageAlt: "Jennifer Chen pharmacist professional"
            },
            {
              id: "4",
              name: "Margaret Thompson",
              role: "Patient",
              company: "Sleep Disorder Treatment",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764082205523-vjsjc42o.jpg",
              imageAlt: "Margaret Thompson patient success story"
            },
            {
              id: "5",
              name: "David Williams",
              role: "Oncology Patient Advocate",
              company: "Cancer Care Support",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764082206536-1r5eoaba.jpg",
              imageAlt: "David Williams healthcare advocate"
            },
            {
              id: "6",
              name: "Amanda Foster",
              role: "Registered Nurse",
              company: "Patient Care Coordination",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764082207473-jh400y5w.jpg",
              imageAlt: "Amanda Foster registered nurse"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          containerClassName="testimonials-section"
        />
      </div>

      <div id="faq" data-section="faq" className="py-20 bg-gray-50">
        <FaqBase
          title="Frequently Asked Questions"
          description="Medical and legal information about our cannabis services and treatment programs"
          tag="Medical Info"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "Is medical cannabis legal?",
              content: "Medical cannabis is legal in 38+ states with proper medical supervision. MedCannabis operates in full compliance with all applicable state and federal regulations. Patients must have a valid medical cannabis card issued by a licensed healthcare provider."
            },
            {
              id: "2",
              title: "Do I need a doctor's recommendation?",
              content: "Yes, all patients must receive a medical cannabis card from a board-certified physician. Our doctors evaluate your medical history, conduct physical examinations, and determine if cannabis is appropriate for your condition. Initial consultations are thorough and personalized."
            },
            {
              id: "3",
              title: "Will cannabis affect my employment?",
              content: "Employment protections vary by state. Federal employees and safety-sensitive positions may have restrictions. We recommend consulting with an employment attorney. Your medical records are confidential and only disclosed with your explicit consent."
            },
            {
              id: "4",
              title: "What conditions qualify for medical cannabis?",
              content: "Qualifying conditions include chronic pain, PTSD, anxiety disorders, cancer, epilepsy, multiple sclerosis, and others depending on your state. Our physicians evaluate each patient individually to determine eligibility based on their specific medical situation."
            },
            {
              id: "5",
              title: "How often will I be monitored?",
              content: "All patients receive ongoing medical supervision. Initial consultations are followed by regular check-ins (typically monthly initially, then quarterly). We adjust treatment plans based on your response and any new developments in your condition."
            },
            {
              id: "6",
              title: "Are your products tested for quality?",
              content: "Yes, all MedCannabis products undergo third-party lab testing for potency, purity, and contaminants. We provide complete laboratory analysis reports with every purchase. All products meet pharmaceutical-grade standards."
            }
          ]}
          textboxLayout="default"
          animationType="smooth"
          containerClassName="faq-section"
        />
      </div>

      <div id="contact" data-section="contact" className="py-20 bg-green-50">
        <ContactCenterForm
          title="Schedule Your Medical Consultation"
          description="Connect with our licensed healthcare providers to discuss your medical cannabis treatment options. Initial consultations are private, confidential, and completely free."
          inputs={[
            {
              name: "fullName",
              type: "text",
              placeholder: "Full Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: true
            },
            {
              name: "condition",
              type: "text",
              placeholder: "Primary Medical Condition",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your health concerns and what you hope to achieve with treatment...",
            rows: 5,
            required: true
          }}
          buttonText="Schedule Consultation"
          containerClassName="contact-section"
        />
      </div>

      <div id="footer" data-section="footer" className="bg-gray-900 text-white">
        <FooterBaseReveal
          columns={[
            {
              title: "Medical Services",
              items: [
                {
                  label: "Initial Consultation",
                  href: "contact"
                },
                {
                  label: "Medical Evaluation",
                  href: "#"
                },
                {
                  label: "Treatment Plans",
                  href: "#"
                },
                {
                  label: "Ongoing Monitoring",
                  href: "#"
                }
              ]
            },
            {
              title: "Information",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "FAQ",
                  href: "faq"
                },
                {
                  label: "Medical Research",
                  href: "#"
                },
                {
                  label: "Blog",
                  href: "#"
                }
              ]
            },
            {
              title: "Legal",
              items: [
                {
                  label: "Privacy Policy",
                  href: "#"
                },
                {
                  label: "Terms of Service",
                  href: "#"
                },
                {
                  label: "Compliance",
                  href: "#"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            }
          ]}
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764082189578-eigeu6po.jpg"
          copyrightText="© 2025 MedCannabis | Licensed Medical Cannabis Provider"
          containerClassName="footer-section"
        />
      </div>
    </ThemeProvider>
  );
}