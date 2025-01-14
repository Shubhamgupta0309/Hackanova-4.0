'use client'

import { motion } from "framer-motion"
import { Accordion } from "./ui/Accordion"

const faqs = [
  {
    question: "Is this hackathon an online event or offline?",
    answer: "This is an offline event that will be held at our campus. All participants are required to be physically present during the hackathon."
  },
  {
    question: "Who is eligible to apply?",
    answer: "Any college student with a valid college ID can apply. Both undergraduate and postgraduate students are welcome."
  },
  {
    question: "Is there any registration fee?",
    answer: "No, participation in Hackernova 4.0 is completely free of charge."
  },
  {
    question: "What are the selection criteria?",
    answer: "Teams will be selected based on their project idea, technical feasibility, and innovation potential. Previous hackathon experience is a plus but not mandatory."
  },
  {
    question: "Can I participate without a team?",
    answer: "Yes, you can register as an individual. We'll help you find team members during the team formation phase."
  },
  {
    question: "Once selected for the hackathon, what should I bring?",
    answer: "Bring your laptop, charger, student ID, and any other hardware you might need for your project. Basic amenities will be provided."
  },
  {
    question: "What are the perks of participating in this hackathon?",
    answer: "Participants will receive swag kits, certificates, networking opportunities, mentorship from industry experts, and a chance to win exciting prizes."
  },
  {
    question: "Can I participate without a technical background?",
    answer: "Yes! We welcome participants from all backgrounds. You can contribute through design, presentation, or business aspects of the project."
  },
  {
    question: "Can I start working on my hack before the event?",
    answer: "No, all development must start after the hackathon begins. However, you can come prepared with ideas and wireframes."
  },
  {
    question: "Will accommodation and food be provided?",
    answer: "Yes, we provide accommodation and meals for all participants throughout the duration of the hackathon."
  }
]

export default function FaqSection() {
  return (
    <section className="py-20 px-4 ">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 bg-orange-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion items={faqs} />
        </motion.div>
      </div>
    </section>
  )
}

