"use client";

import { motion } from "framer-motion";

import CardTilt from "@/components/common/CardTilt";
import ToolkitItem from "./ToolkitItem";

export default function ToolkitCard({ category, index }) {
  const Icon = category.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: "easeOut",
      }}
    >
      <CardTilt
        className="
    group
    relative

    flex
    flex-col

    h-auto
  md:h-[440px]

    overflow-hidden
    rounded-3xl
    border
    border-border
    bg-surface/60
    p-8
    backdrop-blur-sm
    transition-all
    duration-300
  "
        scale={1.015}
      >
        {/* Header */}

        <div className="mb-6 flex items-center gap-4">
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center

              rounded-xl

              border
              border-border

              bg-white/[0.03]
              dark:bg-white/[0.04]
            "
          >
            <Icon size={22} strokeWidth={2} className="text-text-primary" />
          </div>

          <h3
            className="
              text-xl
              font-semibold
              tracking-tight
              text-text-primary
            "
          >
            {category.title}
          </h3>
        </div>

        {/* Divider */}

        <div
          className="
            mb-4
            h-px
            w-full
            bg-border
          "
        />

        {/* Items */}

        <ul
          className="
    w-full
  space-y-2

  md:flex-1
  md:overflow-y-auto
  md:pr-2
  "
        >
          {category.items.map((item, itemIndex) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.35,
                delay: itemIndex * 0.06,
              }}
            >
              <ToolkitItem item={item} />
            </motion.div>
          ))}
        </ul>
      </CardTilt>
    </motion.article>
  );
}
