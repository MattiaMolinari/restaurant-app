// declaring food type interface
export interface food {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
}
export interface review {
  id: string;
  name: string;
  points: number;
  description: string;
}

// declaring menu as array of food type objects
export const menu: Array<food> = [
  {
    id: "finge",
    name: "Appetizers",
    category: "entree",
    price: 8,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc venenatis augue consequat, scelerisque ex eget, commodo nisl. Pellentesque lacus tortor, rutrum quis iaculis quis, pretium vitae eros. Phasellus efficitur eleifend luctus. Morbi auctor auctor dui vel volutpat. Donec venenatis mattis odio et maximus. In sapien urna, posuere sit amet metus eu, accumsan lacinia arcu. Aliquam a accumsan ipsum. Sed lobortis nisl sit amet arcu tincidunt, id sagittis odio laoreet. Nam quis euismod felis. Vestibulum consequat porta justo, vel tristique ex semper id. Proin arcu metus, auctor nec porta non, viverra at sapien. Mauris rhoncus tellus ligula, eu venenatis magna rhoncus vel. Fusce iaculis lectus vel dui vehicula, at laoreet dolor tincidunt. ",
    image: "/../images/appetizers.jpg",
  },
  {
    id: "bruschette",
    name: "Bruschette",
    category: "entree",
    price: 8,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc venenatis augue consequat, scelerisque ex eget, commodo nisl. Pellentesque lacus tortor, rutrum quis iaculis quis, pretium vitae eros. Phasellus efficitur eleifend luctus. Morbi auctor auctor dui vel volutpat. Donec venenatis mattis odio et maximus. In sapien urna, posuere sit amet metus eu, accumsan lacinia arcu. Aliquam a accumsan ipsum. Sed lobortis nisl sit amet arcu tincidunt, id sagittis odio laoreet. Nam quis euismod felis. Vestibulum consequat porta justo, vel tristique ex semper id. Proin arcu metus, auctor nec porta non, viverra at sapien. Mauris rhoncus tellus ligula, eu venenatis magna rhoncus vel. Fusce iaculis lectus vel dui vehicula, at laoreet dolor tincidunt. ",
    image: "/../images/bruschette.jpg",
  },
  {
    id: "buffalo-wings",
    name: "Buffalo wings",
    category: "main",
    price: 12,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc venenatis augue consequat, scelerisque ex eget, commodo nisl. Pellentesque lacus tortor, rutrum quis iaculis quis, pretium vitae eros. Phasellus efficitur eleifend luctus. Morbi auctor auctor dui vel volutpat. Donec venenatis mattis odio et maximus. In sapien urna, posuere sit amet metus eu, accumsan lacinia arcu. Aliquam a accumsan ipsum. Sed lobortis nisl sit amet arcu tincidunt, id sagittis odio laoreet. Nam quis euismod felis. Vestibulum consequat porta justo, vel tristique ex semper id. Proin arcu metus, auctor nec porta non, viverra at sapien. Mauris rhoncus tellus ligula, eu venenatis magna rhoncus vel. Fusce iaculis lectus vel dui vehicula, at laoreet dolor tincidunt. ",
    image: "/../images/buffalo-wings.jpg",
  },
  {
    id: "cake",
    name: "Cake",
    category: "dessert",
    price: 6,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc venenatis augue consequat, scelerisque ex eget, commodo nisl. Pellentesque lacus tortor, rutrum quis iaculis quis, pretium vitae eros. Phasellus efficitur eleifend luctus. Morbi auctor auctor dui vel volutpat. Donec venenatis mattis odio et maximus. In sapien urna, posuere sit amet metus eu, accumsan lacinia arcu. Aliquam a accumsan ipsum. Sed lobortis nisl sit amet arcu tincidunt, id sagittis odio laoreet. Nam quis euismod felis. Vestibulum consequat porta justo, vel tristique ex semper id. Proin arcu metus, auctor nec porta non, viverra at sapien. Mauris rhoncus tellus ligula, eu venenatis magna rhoncus vel. Fusce iaculis lectus vel dui vehicula, at laoreet dolor tincidunt. ",
    image: "/../images/cake.jpg",
  },
  {
    id: "fried-chicken",
    name: "Fried chicken",
    category: "main",
    price: 15,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc venenatis augue consequat, scelerisque ex eget, commodo nisl. Pellentesque lacus tortor, rutrum quis iaculis quis, pretium vitae eros. Phasellus efficitur eleifend luctus. Morbi auctor auctor dui vel volutpat. Donec venenatis mattis odio et maximus. In sapien urna, posuere sit amet metus eu, accumsan lacinia arcu. Aliquam a accumsan ipsum. Sed lobortis nisl sit amet arcu tincidunt, id sagittis odio laoreet. Nam quis euismod felis. Vestibulum consequat porta justo, vel tristique ex semper id. Proin arcu metus, auctor nec porta non, viverra at sapien. Mauris rhoncus tellus ligula, eu venenatis magna rhoncus vel. Fusce iaculis lectus vel dui vehicula, at laoreet dolor tincidunt. ",
    image: "/../images/fried-chicken.jpg",
  },
  {
    id: "grilled-salmon",
    name: "Grilled salmon",
    category: "main",
    price: 18,
    description:
      "      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc venenatis augue consequat, scelerisque ex eget, commodo nisl. Pellentesque lacus tortor, rutrum quis iaculis quis, pretium vitae eros. Phasellus efficitur eleifend luctus. Morbi auctor auctor dui vel volutpat. Donec venenatis mattis odio et maximus. In sapien urna, posuere sit amet metus eu, accumsan lacinia arcu. Aliquam a accumsan ipsum. Sed lobortis nisl sit amet arcu tincidunt, id sagittis odio laoreet. Nam quis euismod felis. Vestibulum consequat porta justo, vel tristique ex semper id. Proin arcu metus, auctor nec porta non, viverra at sapien. Mauris rhoncus tellus ligula, eu venenatis magna rhoncus vel. Fusce iaculis lectus vel dui vehicula, at laoreet dolor tincidunt. ",
    image: "/../images/grilled-salmon.jpg",
  },
  {
    id: "hamburge-and-fries",
    name: "Hamburger and fries",
    category: "main",
    price: 15,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc venenatis augue consequat, scelerisque ex eget, commodo nisl. Pellentesque lacus tortor, rutrum quis iaculis quis, pretium vitae eros. Phasellus efficitur eleifend luctus. Morbi auctor auctor dui vel volutpat. Donec venenatis mattis odio et maximus. In sapien urna, posuere sit amet metus eu, accumsan lacinia arcu. Aliquam a accumsan ipsum. Sed lobortis nisl sit amet arcu tincidunt, id sagittis odio laoreet. Nam quis euismod felis. Vestibulum consequat porta justo, vel tristique ex semper id. Proin arcu metus, auctor nec porta non, viverra at sapien. Mauris rhoncus tellus ligula, eu venenatis magna rhoncus vel. Fusce iaculis lectus vel dui vehicula, at laoreet dolor tincidunt. ",
    image: "/../images/hamburger-and-fries.jpg",
  },
  {
    id: "icecrame",
    name: "Icecream",
    category: "dessert",
    price: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc venenatis augue consequat, scelerisque ex eget, commodo nisl. Pellentesque lacus tortor, rutrum quis iaculis quis, pretium vitae eros. Phasellus efficitur eleifend luctus. Morbi auctor auctor dui vel volutpat. Donec venenatis mattis odio et maximus. In sapien urna, posuere sit amet metus eu, accumsan lacinia arcu. Aliquam a accumsan ipsum. Sed lobortis nisl sit amet arcu tincidunt, id sagittis odio laoreet. Nam quis euismod felis. Vestibulum consequat porta justo, vel tristique ex semper id. Proin arcu metus, auctor nec porta non, viverra at sapien. Mauris rhoncus tellus ligula, eu venenatis magna rhoncus vel. Fusce iaculis lectus vel dui vehicula, at laoreet dolor tincidunt. ",
    image: "/../images/icecream.jpg",
  },
  {
    id: "meatballs",
    name: "Meatballs",
    category: "main",
    price: 12,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc venenatis augue consequat, scelerisque ex eget, commodo nisl. Pellentesque lacus tortor, rutrum quis iaculis quis, pretium vitae eros. Phasellus efficitur eleifend luctus. Morbi auctor auctor dui vel volutpat. Donec venenatis mattis odio et maximus. In sapien urna, posuere sit amet metus eu, accumsan lacinia arcu. Aliquam a accumsan ipsum. Sed lobortis nisl sit amet arcu tincidunt, id sagittis odio laoreet. Nam quis euismod felis. Vestibulum consequat porta justo, vel tristique ex semper id. Proin arcu metus, auctor nec porta non, viverra at sapien. Mauris rhoncus tellus ligula, eu venenatis magna rhoncus vel. Fusce iaculis lectus vel dui vehicula, at laoreet dolor tincidunt. ",
    image: "/../images/meatballs.jpg",
  },
  {
    id: "milkshake",
    name: "Milkshake",
    category: "dessert",
    price: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc venenatis augue consequat, scelerisque ex eget, commodo nisl. Pellentesque lacus tortor, rutrum quis iaculis quis, pretium vitae eros. Phasellus efficitur eleifend luctus. Morbi auctor auctor dui vel volutpat. Donec venenatis mattis odio et maximus. In sapien urna, posuere sit amet metus eu, accumsan lacinia arcu. Aliquam a accumsan ipsum. Sed lobortis nisl sit amet arcu tincidunt, id sagittis odio laoreet. Nam quis euismod felis. Vestibulum consequat porta justo, vel tristique ex semper id. Proin arcu metus, auctor nec porta non, viverra at sapien. Mauris rhoncus tellus ligula, eu venenatis magna rhoncus vel. Fusce iaculis lectus vel dui vehicula, at laoreet dolor tincidunt. ",
    image: "/../images/milkshake.jpg",
  },
  {
    id: "ribs",
    name: "Ribs",
    category: "main",
    price: 18,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc venenatis augue consequat, scelerisque ex eget, commodo nisl. Pellentesque lacus tortor, rutrum quis iaculis quis, pretium vitae eros. Phasellus efficitur eleifend luctus. Morbi auctor auctor dui vel volutpat. Donec venenatis mattis odio et maximus. In sapien urna, posuere sit amet metus eu, accumsan lacinia arcu. Aliquam a accumsan ipsum. Sed lobortis nisl sit amet arcu tincidunt, id sagittis odio laoreet. Nam quis euismod felis. Vestibulum consequat porta justo, vel tristique ex semper id. Proin arcu metus, auctor nec porta non, viverra at sapien. Mauris rhoncus tellus ligula, eu venenatis magna rhoncus vel. Fusce iaculis lectus vel dui vehicula, at laoreet dolor tincidunt. ",
    image: "/../images/ribs.jpg",
  },
  {
    id: "tiramisu",
    name: "Tiramisù",
    category: "dessert",
    price: 6,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc venenatis augue consequat, scelerisque ex eget, commodo nisl. Pellentesque lacus tortor, rutrum quis iaculis quis, pretium vitae eros. Phasellus efficitur eleifend luctus. Morbi auctor auctor dui vel volutpat. Donec venenatis mattis odio et maximus. In sapien urna, posuere sit amet metus eu, accumsan lacinia arcu. Aliquam a accumsan ipsum. Sed lobortis nisl sit amet arcu tincidunt, id sagittis odio laoreet. Nam quis euismod felis. Vestibulum consequat porta justo, vel tristique ex semper id. Proin arcu metus, auctor nec porta non, viverra at sapien. Mauris rhoncus tellus ligula, eu venenatis magna rhoncus vel. Fusce iaculis lectus vel dui vehicula, at laoreet dolor tincidunt. ",
    image: "/../images/tiramisu.jpg",
  },
];

export const categories: Array<string> = ["all", "entree", "main", "dessert"];

export const reviews: Array<review> = [
  {
    id: "r1",
    name: "John",
    points: 8,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc venenatis augue consequat, scelerisque ex eget, commodo nisl. Pellentesque lacus tortor, rutrum quis iaculis quis, pretium vitae eros.",
  },
  {
    id: "r2",
    name: "Anna",
    points: 10,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc venenatis augue consequat, scelerisque ex eget, commodo nisl. Pellentesque lacus tortor, rutrum quis iaculis quis, pretium vitae eros.",
  },
  {
    id: "r3",
    name: "Lisa",
    points: 8,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc venenatis augue consequat, scelerisque ex eget, commodo nisl. Pellentesque lacus tortor, rutrum quis iaculis quis, pretium vitae eros.",
  },
  {
    id: "r4",
    name: "Ben",
    points: 7,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc venenatis augue consequat, scelerisque ex eget, commodo nisl. Pellentesque lacus tortor, rutrum quis iaculis quis, pretium vitae eros.",
  },
  {
    id: "r5",
    name: "Frank",
    points: 9,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc venenatis augue consequat, scelerisque ex eget, commodo nisl. Pellentesque lacus tortor, rutrum quis iaculis quis, pretium vitae eros.",
  },
];
