import React from "react";
import Title from "./Title";
import Question from "./Question";

const FAQContainer = () => {
  return (
    <div className="w-full pb-40">
      <div className="w-full px-16 flex flex-col space-y-16">
        <Title />

        {/* Questions Container */}
        <div className="w-full flex flex-col space-y-6 font-bold">
          <Question
            question="Quality services provided at affordable rates"
            answer="NO ANSWER"
          />

          <Question
            question="Minimum prices for the maximum output Advertise anything"
            answer="NO ANSWER"
          />

          <Question
            question="From the lowest to the highest in advertising services"
            answer="NO ANSWER"
          />

          <Question
            question="Advertising that makes all the difference Leaping over boundaries"
            answer="Integer vel dolor a tellus vehicula malesuada eu eget tortor. Morbi aliquet dolor vel varius imperdiet. Aenean condimentum arcu non sem aliquam, at sagittis metus congue. Praesent ut aliquam sem. Suspendisse potenti. Suspendisse tincidunt diam et ex rutrum volutpat. Aliquam et nisl ullamcorper, bibendum justo nec, pellentesque magna. Donec venenatis consectetur elit ut blandit. Suspendisse ut velit ac ex fermentum auctor. Praesent consequat semper condimentum. Donec laoreet lectus magna, vitae pellentesque dolor vehicula."
          />

          <Question
            question="The innovative ideas you would love Evolution of brilliant"
            answer="NO ANSWER"
          />

          <Question
            question="The agency of something creative We play creativity"
            answer="NO ANSWER"
          />

          <Question
            question="Quality services provided at affordable rates"
            answer="NO ANSWER"
          />

          <Question
            question="Minimum prices for the maximum output Advertise anything"
            answer="NO ANSWER"
          />

          <Question
            question="From the lowest to the highest in advertising services"
            answer="NO ANSWER"
          />

          <Question
            question="The agency of something creative We play creativity"
            answer="NO ANSWER"
          />

          <Question
            question="Quality services provided at affordable rates"
            answer="NO ANSWER"
          />

          <Question
            question="Minimum prices for the maximum output Advertise anything"
            answer="NO ANSWER"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQContainer;
