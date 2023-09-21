"use client";

import { useState } from "react";
import ContactInfoView from "@/components/contactInfoView";
import PaymentInfoView from "@/components/paymentInfoView";
import ConfirmationView from "@/components/confirmationView";
import { FieldValues } from "react-hook-form";

export default function Home() {
  const [step, setStep] = useState(0);

  const [data, setData] = useState({
    fullName: "",
    email: "",
    phone: "",
    visitReason: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvv: "",
    billingZip: "",
    cancellationFeeAgreed: false,
  });

  const goToNextStep = () => {
    setStep(step + 1);
  };

  const updateData = (formData: FieldValues) =>
    setData((oldData) => ({ ...oldData, ...formData }));

  const onContinueClick = (formData: any) => {
    updateData(formData);
    goToNextStep();
  };

  const onBookClick = (formData: any) => {
    updateData(formData);
    console.log(data);
    goToNextStep();
  };

  return (
    <>
      {step === 0 && <ContactInfoView onContinueSuccess={onContinueClick} />}
      {step === 1 && <PaymentInfoView onBookClick={onBookClick} />}
      {step === 2 && <ConfirmationView />}
    </>
  );
}
