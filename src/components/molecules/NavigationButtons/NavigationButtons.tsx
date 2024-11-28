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
  return (
    <div className="py-3 sm:py-4 px-4 sm:px-8 border-t border-gray flex flex-row justify-between gap-2">
      {!isPreviousDisabled && (
        <Button
          onClick={onPrevious}
          variant="secondary"
          className="w-full sm:w-auto"
        >
          Go Back
        </Button>
      )}
      <Button
        onClick={onNext}
        disabled={isNextDisabled}
        variant="primary"
        className="ml-auto w-full sm:w-auto"
      >
        {nextLabel}
      </Button>
    </div>
  );
};