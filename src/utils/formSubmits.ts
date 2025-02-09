import loginAction from "@/actions/login";
import registerAction from "@/actions/register";

export const handleLoginSubmit = async(e: React.FormEvent<HTMLFormElement>, router: { push: (path: string) => void }) => {
  e.preventDefault();

  const formData = new FormData(e.target as HTMLFormElement);

  const email = formData.get('Email') as string;
  const password = formData.get('Password') as string;

  const response = await loginAction(email, password);

  (e.target as HTMLFormElement).reset();

  if(response.error) return console.error(response.error)
  router.push('/');
}

export const handleRegisterSubmit = async(e: React.FormEvent<HTMLFormElement>, router: { push: (path: string) => void }) => {
  e.preventDefault();

  const formData = new FormData(e.target as HTMLFormElement);

  const username = formData.get('Username') as string;
  const email = formData.get('Email') as string;
  const password = formData.get('Password') as string;

  if(!username) return;

  const response = await registerAction(username, email, password);

  (e.target as HTMLFormElement).reset();

  if(response.error) return console.error(response.error);
  router.push('/');  
}