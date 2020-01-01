import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios'
import qs from 'query-string'
import RavePaymentModal from "react-ravepayment";

import Loading from '../../components/loading'

export default props => {
  const [config, setConfig] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, showSuccess] = useState(false)

  const getReference = () => {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

    for (let i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  useEffect(() => {
    document.title = 'Donate | Funbanye Foundation'
    const { search } = props.location
    const config = qs.parse(search)
    setConfig({
      ...config,
      amount: parseInt(config.amount),
      trxnRef: getReference(),
      key: 'FLWPUBK-cb9ca9410e6ac5c792cb131612400f97-X',
    })
  })

  const fetchResponse = response => {
    // alert('fetching')
    console.log(response)
    setLoading(true)
    setError(null)
    showSuccess(false)

    const { causeId, amount, socketId, userId } = config
    axios
      .post('https://ngo-backend.herokuapp.com/api/v1/donations', {
        trxnRef: response.tx.txRef || response.data.tx.txRef,
        amount,
        causeId,
        socketId,
        userId
      })
      .then(res => {
        const { data } = res;
        setLoading(false)
        if (data.error) {
          setError(data.message)
        } else {
          showSuccess(true)
          setTimeout(() => window.location = 'funbanye://', 2000)
        }
      })
      .catch(({ response: { data: { message } } }) => {
        setLoading(false)
        setError(message)
      })
  }

  const close = () => {
    setError('Transaction was Cancelled')
  }

  return (
    <Fragment>
      {loading && <Loading/>}
      {!loading && error && (
        <div style={{ ...styles.flex, ...styles.absolute }}>
          <h3 style={styles.text}>Oops!! Something went wrong</h3>
          <h6 style={styles.text}>{error ? error : ''}</h6>
        </div>
      )}
      {!loading && success && (
        <div style={{ ...styles.flex, ...styles.absolute }}>
          <h3 style={styles.text}>Donation Successful!!!</h3>
          <h6 style={styles.text}>You can now go back to the app</h6>
        </div>
      )}
      {!success && !loading && <div style={{ ...styles.flex, ...styles.payContainer }}>
        {config.amount && <RavePaymentModal
          text="Make Payment"
          class="payButton"
          currency={config.currency}
          reference={config.trxnRef}
          email={config.email}
          amount={config.amount}
          ravePubKey={config.key}
          callback={fetchResponse}
          // close={close}
          isProduction={false}
          tag="button"
        />}
      </div>}
    </Fragment>
  )
}

const styles = {
  flex: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  payContainer: {
    backgroundColor: '#333',
    position: 'relative'
  },
  absolute: {
    position: 'absolute',
    zIndex: 100000,
    flexDirection: 'column',
    backgroundColor: '#fff'
  },
  text: {
    textAlign: 'center'
  }
}
