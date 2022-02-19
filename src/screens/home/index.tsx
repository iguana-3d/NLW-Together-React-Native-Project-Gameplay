import React, { useState } from 'react';
import {
   View,
   Text
} from 'react-native';

/********************** Components *******************************/
import { Background } from '../../components/background';
import { ButtonAdd } from '../../components/buttonAdd';
import { Profile } from '../../components/profile';
import { CategorySelect } from '../../components/categorySelect';
import { ListHeader } from '../../components/ListHeader';

/********************** Styles *******************************/
import { styles } from './styles';

export function Home() {
   const [category, setCategory] = useState<string>('');

   function handleCategorySelect(categoryId: string) {
      categoryId === category ? setCategory('') : setCategory(categoryId)  
   }

   return (
      <Background>
         <View>
            <View style={styles.header}>
               <Profile />
               <ButtonAdd />
            </View>
         </View>
         <View>
            <CategorySelect
               categorySelected={category}
               setCategory={handleCategorySelect}
            />
            <View style={styles.content}>
               <ListHeader />
            </View>
         </View>
      </Background>
   );
}