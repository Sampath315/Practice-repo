import SecondRoute from "@/components/secondRouteFiles/example";

const Page = async ({ params }: { params: { secondRoute: string } }) => {
  const param = await params;
  return (
    <div>
      second Route and the route is: <SecondRoute params={param} />
    </div>
  );
};
export default Page;
