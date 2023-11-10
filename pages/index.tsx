import { ConnectWallet, useAddress } from '@thirdweb-dev/react'
import styles from '../styles/Home.module.css'

import { NextPage } from 'next'
import AddContact from '../components/add-contact'
import ContactList from '../components/contact-list'

const Home: NextPage = () => {
  const address = useAddress()

  return (
    <div className={styles.container}>
      <div className={styles.addressContainer}>
        <div className={styles.addressHeader}>
          <h1 className={styles.gradientText0}>Spicy Contact Book</h1>

          {!address && (
            <p style={{ color: '#777' }}>
              Connect your wallet to access the contact book
            </p>
          )}
          <ConnectWallet
            style={{
              background: '-webkit-linear-gradient(#490303, #9c3030, #dd0244)',
              color: 'white',
            }}
          />
        </div>
        {address && (
          <div className={styles.addressListContainer}>
            <div className={styles.addressListHeader}>
              <h3>Contacts:</h3>
              <AddContact />
            </div>
            <ContactList />
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
