import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAppSelector } from '../../store'
import BookOverView from './BookOverView'
import BookHistory from './BookHistory'

const Booking = () => {
    const booking = useAppSelector (state => state.booking)
    return booking? <BookOverView/> : <BookHistory/>
}

export default Booking

const styles = StyleSheet.create({})