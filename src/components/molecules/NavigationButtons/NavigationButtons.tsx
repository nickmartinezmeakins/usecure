import { Button } from "@/components/atoms/Button";

interface NavigationButtonsProps {
  onPrevious: () => void;
  onNext: () => void;
  isPreviousDisabled: boolean;
  isNextDisabled: boolean;
}

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  onPrevious,
  onNext,
  isPreviousDisabled,
  isNextDisabled,
}) => {
  return (
    <div className="py-3 sm:py-4 px-4 sm:px-8 border-t border-gray flex flex-row justify-between">
      {!isPreviousDisabled && (
        <Button
          onClick={onPrevious}
          variant="secondary"
        >
        Go Back
        </Button>
      )}
      <Button
        onClick={onNext}
        disabled={isNextDisabled}
        variant="primary"
        className="ml-auto"
      >
        Continue
      </Button>
    </div>
  );
};
