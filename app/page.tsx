import GoogleLoginForm from '@/components/GoogleLoginForm'
import Welcome from '@/components/Welcome'

export default function Home() {
  return (
    <main className="w-full min-h-screen flex items-center justify-center flex-col bg-blue-800 circles__background">
      <h1 className='font-alt text-7xl font-normal text-white mb-10'>FINCROP</h1>
      <GoogleLoginForm />
      <Welcome />
    </main>
  )
}
