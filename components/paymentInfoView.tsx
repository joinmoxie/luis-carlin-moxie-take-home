import { FieldValues, useForm } from "react-hook-form";
import Label from "./label";
import InputField from "./inputFIeld";
import { TwoColumnLayoutWithFooter } from "./layout";
import InfoCard from "./infoCard";
import FormCard from "./formCard";
import ErrorMessage from "./errorMessage";
import BottomBar from "./bottomBar";
import Button from "./button";

interface PaymentInfoViewProps {
  onBookClick: (formData: any) => void;
}

function PaymentInfoView({ onBookClick }: PaymentInfoViewProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({ mode: "onChange" });

  const onSubmit = (data: FieldValues) => {
    onBookClick(data);
  };

  return (
    <TwoColumnLayoutWithFooter
      left={<InfoCard />}
      right={
        <FormCard title="Secure your appointment by card">
          <p>A credit or debit card is required to book your appointment.</p>

          <Label>Card Information</Label>
          <div>
            <InputField
              placeholder="1234 1234 1234 1234"
              {...register("cardNumber", { required: true })}
            />
            {errors.cardNumber && (
              <ErrorMessage>card number is required</ErrorMessage>
            )}
          </div>
          <div style={{ display: "flex", gap: "16px" }}>
            <div style={{ flex: 1 }}>
              <InputField
                placeholder="MM / YY"
                {...register("cardExpiry", { required: true })}
              />
              {errors.cardExpiry && (
                <ErrorMessage>card expiration is required</ErrorMessage>
              )}
            </div>
            <div style={{ flex: 1 }}>
              <InputField
                placeholder="CVV"
                {...register("cardCvv", { required: true })}
              />
              {errors.cardCvv && (
                <ErrorMessage>card cvv is required</ErrorMessage>
              )}
            </div>
          </div>
          <div>
            <InputField
              placeholder="Billing zip code"
              {...register("billingZip", { required: true })}
            />
            {errors.billingZip && (
              <ErrorMessage>billing zip is required</ErrorMessage>
            )}
          </div>
          <div>
            <div
              style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}
            >
              <input
                type="checkbox"
                {...register("cancellationFeeAgreed", { required: true })}
              />
              <p>
                We ask that you please reschedule or cancel at least 24 hours
                before the beginning of your appointment or you may be charged a
                cancellation fee of $50. In the event of emergency, contact us
                directly. Your card will held in case of late cancellation and
                for future purchases. It will not be charged now.
              </p>
            </div>
            {errors.cancellationFeeAgreed && (
              <ErrorMessage>You have to agree</ErrorMessage>
            )}
          </div>
          <p>
            By creating this appointment, you acknowledge you will receive
            automated transactional messages from this merchant.
          </p>
        </FormCard>
      }
      footer={
        <BottomBar>
          <Button onClick={handleSubmit(onSubmit)}>Book</Button>
        </BottomBar>
      }
    />
  );
}

export default PaymentInfoView;
