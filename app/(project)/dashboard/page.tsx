import { auth } from "@/app/lib/auth";
import FormLinks from "@/components/form-links";
import Header from "@/components/header";
import Preview from "@/components/preview";
import { Card, CardContent } from "@/components/ui/card";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await auth();
  const image = session?.user?.image!;
  const name = session?.user?.name!;
  const email = session?.user?.email!;

  if (!session) {
    redirect("/");
  }

  return (
    <div className="h-screen">
      <Header name={name} image={image} />
      <div className="flex flex-col lg:grid lg:grid-cols-4 gap-4 md:gap-6 p-4 md:p-6">
        <Card className="flex flex-col w-full h-full border-indigo-500 rounded-2xl col-span-3">
          <CardContent className="flex-1 pb-0 h-full justify-center">
            <div className="flex flex-col gap-4 md:gap-8 justify-center items-center">
              <FormLinks />
            </div>
          </CardContent>
        </Card>

        <Card className="flex flex-col h-full border-indigo-500 rounded-2xl ">
          <CardContent className="flex-1 m-auto">
            <Preview image={image} title={name} description={email} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
