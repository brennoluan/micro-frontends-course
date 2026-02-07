import { Card, CardContent, CardFooter } from '@repo/ui';
import { formatPrice } from '@repo/utils';
import type { Book } from '@repo/types';

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow">
      <img
        src={book.coverUrl}
        alt={book.title}
        className="w-full h-48 object-cover"
      />
      <CardContent className="p-4">
        <div className="mb-2">
          <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded">
            {book.category}
          </span>
        </div>
        <h3 className="font-semibold text-lg text-gray-900 mb-1 line-clamp-2">
          {book.title}
        </h3>
        <p className="text-sm text-gray-600 mb-2">{book.author}</p>
        <p className="text-xs text-gray-500 line-clamp-2">{book.description}</p>
      </CardContent>
      <CardFooter className="px-4 pb-4 pt-2 flex justify-between items-center">
        <span className="text-xl font-bold text-primary-600">
          {formatPrice(book.price)}
        </span>
      </CardFooter>
    </Card>
  );
}
