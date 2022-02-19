import React from 'react';
import { ScrollView } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { categories } from '../../utils/categories';
/********************** Components *******************************/
import { Category } from '../category';

type Props = {
   categorySelected: string;
   setCategory: (categoryId: string) => void;
}

export function CategorySelect({ categorySelected, setCategory }: Props) {
   return (
      <ScrollView
         horizontal
         style={styles.container}
         showsHorizontalScrollIndicator={false} //disable scrollbar view
         contentContainerStyle={{ paddingRight: 40 }} //for create padding bar 
      >
         {
            categories.map(category => (
               <Category
                  key={category.id}
                  title={category.title}
                  icon={category.icon}
                  checked={category.id === categorySelected}
                  onPress={() => setCategory(category.id)}
               />
            ))
         }
      </ScrollView>
   );
}