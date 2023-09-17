import Ads from "@/components/sharing/Ads";
import ClientTestimonials from "@/components/sharing/ClientTestimonials";
import CustomerSupport from "@/components/sharing/CustomerSupport";
import Header from "@/components/sharing/Header";
import Integrate from "@/components/sharing/Integrate";
import OurFeatures from "@/components/sharing/OurFeatures";
import SaveTimeWithAutomations from "@/components/sharing/SaveTimeWithAutomations";
import SetupInMinutes from "@/components/sharing/SetupInMinutes";
import Support from "@/components/sharing/Support";
import VisualizeWorkWithViews from "@/components/sharing/VisualizeWorkWithViews";
import WhatYouCanDo from "@/components/sharing/WhatYouCanDo";

export default function Home() {
  return (
    <>
      <Header />
      <div className="xl:container mx-auto">
        <Ads />
        <WhatYouCanDo />
        <OurFeatures />
      </div>
      <SetupInMinutes />
      <div className="xl:container mx-auto">
        <Integrate />
        <SaveTimeWithAutomations />
      </div>
      <VisualizeWorkWithViews />
      <div className="xl:container mx-auto">
        <CustomerSupport />
        <ClientTestimonials />
      </div>
      <Support />
    </>
  )
}
