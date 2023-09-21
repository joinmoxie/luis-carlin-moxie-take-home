import { FieldValues, useForm } from "react-hook-form";
import Label from "./label";
import InputField from "./inputFIeld";

import Button from "./button";
import BottomBar from "./bottomBar";
import ErrorMessage from "./errorMessage";
import InfoCard from "./infoCard";
import { TwoColumnLayoutWithFooter } from "./layout";
import FormCard from "./formCard";

interface ContactInfoViewProps {
  onContinueSuccess: (formData: FieldValues) => void;
}

function ContactInfoView({ onContinueSuccess }: ContactInfoViewProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({ mode: "onChange" });

  return (
    <TwoColumnLayoutWithFooter
      left={<InfoCard />}
      right={
        <FormCard title="Enter your details below">
          <div>
            <Label>Full Name</Label>
            <InputField
              placeholder="Input text"
              {...register("fullName", { required: true })}
            />
            {errors.fullName && (
              <ErrorMessage>full name is required</ErrorMessage>
            )}
          </div>
          <div>
            <Label>Email</Label>
            <InputField
              placeholder="Input text"
              {...register("email", { required: true })}
            />
            {errors.email && <ErrorMessage>email is required</ErrorMessage>}
          </div>
          <div>
            <Label>Phone</Label>
            <InputField
              placeholder="Input text"
              {...register("phone", { required: true })}
            />
            {errors.phone && <ErrorMessage>phone is required</ErrorMessage>}
          </div>
          <div>
            <Label>Visit reason</Label>
            <InputField
              placeholder="Input text"
              {...register("visitReason", { required: true })}
            />
            {errors.visitReason && (
              <ErrorMessage>visit reason is required</ErrorMessage>
            )}
          </div>
        </FormCard>
      }
      footer={
        <BottomBar>
          <Button onClick={handleSubmit(onContinueSuccess)}>Continue</Button>
        </BottomBar>
      }
    />
  );
}

export default ContactInfoView;
