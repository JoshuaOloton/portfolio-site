import { inter } from "@/app/fonts"

type Props = {}

const ContactMe = ({}: Props) => {
  return (
    <section className={`${inter.className} section_layout`}>
     <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="section_header">CONTACT ME</h2>
    <p className="section_subheader">I would love to hear from you! Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out.</p>
    </div>   
    </section>
  )
}

export default ContactMe