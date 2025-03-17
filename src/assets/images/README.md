# Source Assets Images Directory

This directory is for image assets that are imported and processed by the build system.

## Usage

Images placed in this directory should be imported in your components:

```jsx
// In your React components
import myImage from '@/assets/images/my-image.png';

function MyComponent() {
  return <img src={myImage} alt="Description" />;
}
```

This directory is ideal for:
- Images that need to be optimized during build
- Images that are part of your component structure
- Images that might change between builds
- Images that benefit from Next.js image optimization

## Next.js Image Component

For optimal performance, consider using the Next.js Image component:

```jsx
import Image from 'next/image';
import myImage from '@/assets/images/my-image.png';

function MyComponent() {
  return (
    <Image
      src={myImage}
      alt="Description"
      width={500}
      height={300}
      priority={false}
      placeholder="blur"
    />
  );
}
``` 