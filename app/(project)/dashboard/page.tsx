import { auth } from "@/app/lib/auth";
import FormLinks from "@/components/form-links";
import Header from "@/components/header";
import LinkInfos from "@/components/link-infos";
import Preview from "@/components/preview";
import { Card, CardContent } from "@/components/ui/card";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await auth();
  const image = session?.user?.image!;
  const name = session?.user?.name!;
  const email = session?.user?.email!;
  const userId = session?.user?.id!;

  /*await db.collection("users").doc(userId).update({
    teste: "test",
  });*/

  if (!session) {
    redirect("/");
  }

  return (
    <div className="h-screen">
      <Header image={image} />
      <div className="flex flex-col lg:grid lg:grid-cols-4 gap-2 md:gap-6 p-4 md:p-4">
        <Card className="flex flex-col w-full h-full border-indigo-500 rounded-2xl col-span-3">
          <CardContent className="flex-1 pb-0 h-full justify-center">
            <div className="flex flex-col gap-2 md:gap-4 justify-center items-center">
              <FormLinks title={name} subtitle={email} userId={userId} />
            </div>
          </CardContent>
        </Card>

        <Card className="flex flex-col h-full border-indigo-500 rounded-2xl itens-center justify-center">
          <CardContent className="flex-1 pb-0 h-full justify-center">
            <div className="flex flex-col justify-center items-center">
              <Preview image={image} title={name} subtitle={email} />
              <LinkInfos userId={userId} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
