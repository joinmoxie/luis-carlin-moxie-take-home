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
          <div>
            <InputField
              placeholder="MM / YY"
              {...register("cardExpiry", { required: true })}
            />
            {errors.cardExpiry && (
              <ErrorMessage>card expiration is required</ErrorMessage>
            )}
          </div>
          <div>
            <InputField
              placeholder="CVV"
              {...register("cardCvv", { required: true })}
            />
            {errors.cardCvv && (
              <ErrorMessage>card cvv is required</ErrorMessage>
            )}
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
            <input
              type="checkbox"
              {...register("cancellationFeeAgreed", { required: true })}
            />
            {errors.cancellationFeeAgreed && (
              <ErrorMessage>You have to agree</ErrorMessage>
            )}
          </div>
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
