1. navItems should be an array that looks something like this:

```javascript
[
  {
    text: "Sample link name",
    link: "https://sample-link.com",
  },
  {
    text: "Sample link name",
    link: "https://sample-link.com",
  },
  {
    text: "Sample link name",
    link: "https://sample-link.com",
  },
];
```

So if you want to use `<MobileNav />` you need to do it like this (see `_app.js` as an example):

```javascript
<MobileNav
  navItems={[
    {
      text: "Sample link name",
      link: "https://sample-link.com",
    },
    {
      text: "Sample link name",
      link: "https://sample-link.com",
    },
    {
      text: "Sample link name",
      link: "https://sample-link.com",
    },
  ]}
/>
```

2. The purpose of adding the "d-md-none d-lg-none d-xl-none" classes are to hide the mobile nav and mobile nav button on tablets/laptops/monitors because it's a mobile nav, we only need to see it on phones.
