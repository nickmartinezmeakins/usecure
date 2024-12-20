import { Button } from "@/components/atoms/Button";

interface NavigationButtonsProps {
  onPrevious: () => void;
  onNext: () => void;
  isPreviousDisabled: boolean;
  isNextDisabled: boolean;
  nextLabel: string;
}

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  onPrevious,
  onNext,
  isPreviousDisabled,
  isNextDisabled,
  nextLabel,
}) => {
  const Icon = <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.46875 6.46875L6.46875 0.5C6.75 0.1875 7.21875 0.1875 7.53125 0.5C7.8125 0.78125 7.8125 1.25 7.53125 1.53125L2.03125 7L7.5 12.5C7.8125 12.7812 7.8125 13.25 7.5 13.5312C7.21875 13.8438 6.75 13.8438 6.46875 13.5312L0.46875 7.53125C0.15625 7.25 0.15625 6.78125 0.46875 6.46875Z" fill="currentColor"/>
  </svg>
  return (
    <div className="py-3 sm:py-4 px-4 sm:px-8 border-t border-gray flex flex-row justify-between gap-2">
      <Button
        onClick={onPrevious}
        variant="secondary"
        className="w-full sm:w-auto flex flex-row align-middle gap-2"
        disabled={isPreviousDisabled}
      >
        <span>{Icon} </span>Go Back
      </Button>
      <Button
        onClick={onNext}
        disabled={isNextDisabled}
        variant="primary"
        className="ml-auto w-full sm:w-auto flex flex-row align-middle gap-2"
      >
        {nextLabel} <span className="rotate-180">{Icon}</span>
      </Button>
    </div>
  );
};