import loginAction from "@/actions/login";
import registerAction from "@/actions/register";

export const handleLoginSubmit = async(
    { email, password }: { email: string, password: string }, 
    router: { push: (path: string) => void }
  ) => {

  const response = await loginAction(email, password);
  if(response.error) return response;
  router.push('/');
}

export const handleRegisterSubmit = async(
  {  email, password, username }: { email: string, password: string, username: string }, 
    router: { push: (path: string) => void }
  ) => {

  const response = await registerAction(username, email, password);

  if(response.error) return response;
  router.push('/');  
}