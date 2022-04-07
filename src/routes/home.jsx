import React from 'react'

import { Layout } from '../components/layout'
import { Hero } from '../components/hero'
import { HeroIllustration } from '../components/hero-illustration'

import '../assets/styles.css'

export default function HomePage() {
  return (
    <Layout>
      <Hero
        title="Find your new roommate today!"
        content="Connect with students from your university who are moving to the same city as you. Find new friends, choose roommates, and create memories!"
        illustration={HeroIllustration}
      />
    </Layout>
  )
}
