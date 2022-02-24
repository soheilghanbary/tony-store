import { FilterSelectProps } from "interfaces";
import { FC, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "next-i18next";

const selectVariants = {
  hidden: { opacity: 0.5, y: 10 },
  visible: { opacity: 1, y: 0 },
  leave: { opacity: 0, y: 10 },
};

const FilterSelect: FC<FilterSelectProps> = ({ items, onChange }) => {
  const [showSelect, setShowSelect] = useState(false);
  const toggleSelect = () => setShowSelect(!showSelect);
  return (
    <div className="select mb-5">
      <button
        className="btn warning small"
        onClick={toggleSelect}
        onBlur={toggleSelect}
      >
        Filter
      </button>
      <AnimatePresence initial={false} exitBeforeEnter>
        {showSelect && (
          <motion.ul
            initial="hidden"
            animate="visible"
            exit="leave"
            variants={selectVariants}
            transition={{ duration: 0.2 }}
            className="select__list"
          >
            {items.map((item, i) => (
              <li key={i} onClick={() => onChange(item)}>{item.label}</li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};
export default FilterSelect;
