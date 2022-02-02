import React from 'react';
import { Text, View } from 'react-native';

import { Avatar } from '../avatar';
import { styles } from './styles';

export function Profile() {
   return (
      <View style={styles.container}>
         <Avatar 
            urlImage="https://github.com/iguana-3d.png"
         />
         <View>
            <View style={styles.user}>
               <Text style={styles.greeting}>
                  Olá,
               </Text>
               <Text style={styles.username}>
                  Iguana
               </Text>
            </View>

            <Text style={styles.message}>
               Hoje é dia de vitória
            </Text>
         </View>
      </View>
   )
}