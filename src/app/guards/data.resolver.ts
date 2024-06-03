import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ProductsService } from '../modules/exmpls/services/products.service';
import { count } from 'rxjs';
import { MessageService } from '../modules/message/message.service';

// Need Class
export const dataResolver: ResolveFn<boolean> = (route, state) => {
  console.log('[resolverFn]');
  const messages = inject(MessageService);
  const productsService = inject(ProductsService);

  let count = productsService.getData();
  console.log('[r] products',count?.length > 0, count.length);
  if (count?.length == 0) {
    messages.reportMessage({text: 'Loading data...', error: false});
  }
  return count?.length > 0;
};
