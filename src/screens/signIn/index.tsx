import React from "react";
import {
   View,
   Text,
   Image
} from "react-native";

import IllustrationImg from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/buttonIcon";
import { styles } from "./styles";

export function SignIn() {
   return (
      <View style={styles.container}>
         <Image
            source={IllustrationImg}
            style={styles.image}
            resizeMode="stretch"
         />

         <View style={styles.content}>
            <Text style={styles.title}>
               Conecte-se {'\n'}
               e organize suas {'\n'}
               jogatinas 
            </Text>
            <Text style={styles.subtitle}>
               Crie grupos para jogar seus games {'\n'}
               favoritos com seus amigos
            </Text>

            <ButtonIcon 
            activeOpacity={.7}
            title="Entrar com Discord"
             />
         </View>
      </View>
   );
}
