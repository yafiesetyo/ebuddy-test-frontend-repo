import UpdateForm, { UserData } from "./_form";

import UserApi from "@/apis/userApi";

export default function Home() {
  const user: UserData = {
    name: "a",
    username: "b"
  }

  return (
    <div className="h-screen bg-white">
      <UpdateForm u={user}/>
    </div>
  );
}

export async function getServerSideProps(){
  const userApi = new UserApi("http://localhost:3001")
  const user = await userApi.fetch("")
}
