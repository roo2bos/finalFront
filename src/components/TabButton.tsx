interface TabButtonProps {
  label: string;
  onClick: () => void;
  isActive: boolean;
}

export default function TabButton({
  label,
  onClick,
  isActive,
}: TabButtonProps) {
  return (
    <button
      type='button'
      className={`tab-btn ${
        isActive
          ? 'bg-[var(--highlight-color)] text-white'
          : 'bg-[var(--btn-sub-bg)]'
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
