import React from 'react'
import classnames from 'clsx'
import app from '../firebase'
import { getFirestore, addDoc, collection } from 'firebase/firestore/lite'

export function NewsletterForm({ className, onSubmit, submitBtn }) {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [university, setUniversity] = React.useState('')
  const [location, setLocation] = React.useState('')

  const [loader, setLoader] = React.useState(false)

  const db = getFirestore(app)

  function handleNameChange(event) {
    setName(event.target.value)
  }
  function handleEmailChange(event) {
    setEmail(event.target.value)
  }
  function handleUniversityChange(event) {
    setUniversity(event.target.value)
  }
  function handeLocationChange(event) {
    setLocation(event.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoader(true)
    console.log(db)

    var date = new Date().getDate() //Current Date
    var month = new Date().getMonth() + 1 //Current Month
    var year = new Date().getFullYear() //Current Year
    var hours = new Date().getHours() //Current Hours
    var min = new Date().getMinutes() //Current Minutes

    var submissionDate =
      month + '/' + date + '/' + year + ' ' + hours + ':' + min

    var ref = collection(db, 'websiteLeads')

    const docRef = addDoc(ref, {
      date: submissionDate,
      email: email,
      name: name,
      university: university,
      location: location,
    })
      .then(() => {
        alert('Thank you for your interest!')
        setLoader(false)
      })
      .catch((error) => {
        alert(error.message)
        setLoader(false)
      })
    setEmail('')
    setName('')
    setUniversity('')
    setLocation('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={classnames('newsletter-form is-revealing md:flex', className)}
    >
      <div className="mr-2 flex-shrink flex-grow space-y-3">
        <input
          required
          placeholder="Your Name"
          id="name"
          name="name"
          type="name"
          value={name}
          onChange={handleNameChange}
          autoComplete="off"
          className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
        />
        <input
          required
          placeholder="Your Email"
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          autoComplete="off"
          className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
        />
        <input
          required
          placeholder="Your University"
          id="university"
          name="university"
          type="university"
          value={university}
          onChange={handleUniversityChange}
          autoComplete="off"
          className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
        />
        <input
          required
          placeholder="Your Next Location"
          id="location"
          name="location"
          type="location"
          value={location}
          onChange={handeLocationChange}
          autoComplete="off"
          className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
        />
        <div className="control">
          <button
            className="-mt-px inline-flex cursor-pointer justify-center whitespace-nowrap rounded-sm border-0 bg-gradient-to-r from-secondary-500 to-secondary-400 py-4 px-7 text-center font-medium leading-4 text-white no-underline shadow-lg"
            type="submit"
          >
            {submitBtn || 'Submit'}
          </button>
        </div>
      </div>
    </form>
  )
}
