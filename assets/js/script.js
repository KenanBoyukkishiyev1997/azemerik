function openNav() {
  document.getElementById("myNav").style.width = "300px";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0";
}

$(".headerMob__mega").click(() => {
  $(".mega-menu-areaNav").toggleClass("d-none");
});

$(window).scroll(function () {
  if ($(window).scrollTop() > 200) {
    $(".header").addClass("sticky");
    $(".nav").addClass("stickynavbar");
    $(".nav").removeClass("d-none");
  } else {
    $(".header").removeClass("sticky");
    $(".nav").removeClass("stickynavbar");
    $(".nav").addClass("d-none");
  }
});

$(document).ready(function () {
  $(".cart-item-close").click(function () {
    $(this).parent().parent().parent().parent().addClass("d-none");
  });

  //   $(".order__card-close").click(function () {
  //     $(this).parent().addClass("d-none");
  //   });

  $(".headline__link").click(function () {
    $(".headline__link").removeClass("headline__link-color");

    $(this).addClass("headline__link-color");
  });
});

$(".car__link").click(function () {
  $(".car__link").removeClass("iconSvg");

  $(this).addClass("iconSvg");
});

$(".header__auth-shopCard span").click(function () {
  $(".brator-cart-item-list").addClass("mini-cart-open");
});

$(".closeCart").click(function () {
  $(".brator-cart-item-list").removeClass("mini-cart-open");
});

//////BLOG////////////
$(".categorie__item").click(function () {
  $(this).toggleClass("active");
});

$(".product__box-icons").click(function () {
  $(this).find("img").toggle();
});

//user

$(".user__item-box").click(function () {
  var t = $(this).attr("id");

  $(".user__item-box").removeClass("active");

  $(this).addClass("active");

  $(".user__right-box").hide();
  $("#" + t + "C").fadeIn("slow");
});

$(".responsible").click(function () {
  var t = $(this).attr("id");

  $(".responsible").removeClass("responsibleActive");

  $(this).addClass("responsibleActive");

  $(".responsible__info").hide();
  $("#" + t + "B").toggle();
});

$(".productDetail__navbar-title").click(function () {
  var A = $(this).attr("id");

  $(".productDetail__navbar-title").removeClass("active");

  $(this).addClass("active");

  $(".productDetail__box").hide();
  $("#" + A + "A").fadeIn("slow");
});

//bucket
window.addEventListener("DOMContentLoaded", () => {
  const decrement = document.querySelectorAll(".order__card-count-decimal"),
    increment = document.querySelectorAll(".order__card-count-incurute"),
    remove = document.querySelectorAll(".order__card-close");

  let price = document.querySelectorAll(".price");
  price.forEach(
    (item) => (item.textContent = `${item.getAttribute("data-price")} azn`)
  ),
    (fullTotal = document.querySelector(".fullTotal")),
    (allPrice = document.querySelectorAll(".price")),
    (discount = document.querySelector(".discount")),
    (fullTotalDiscount = document.querySelector(".fullTotalDiscount")),
  total = 0;

  discount.textContent = `${discount.getAttribute("data-discount")}AZN`;

  allPrice.forEach((item) => {
    total += Number(item.getAttribute("data-total"));
    fullTotal.textContent = `${total} AZN`;

    fullTotalDiscount.textContent = `${total - discount.getAttribute("data-discount")} AZN`;
  });

  remove.forEach((item) => {
    item.addEventListener("click", (e) => {
      const price = e.target.closest(".order__card").querySelector(".price");
      price.setAttribute("data-total", 0);
      e.target.parentElement.parentElement.remove();
      total = 0;

      allPrice.forEach((item) => {
        total += Number(item.getAttribute("data-total"));
        fullTotal.textContent = `${total} AZN`;

        fullTotalDiscount.textContent = `${ total - discount.getAttribute("data-discount")} AZN`;
      });

      console.log(fullTotal.textContent);
    });
  });

  decrement.forEach((item) => {
    item.addEventListener("click", (e) => {
      const parent = e.target.closest(".order__card-count"),
        qty = parent.querySelector(".qty"),
        price = parent.querySelector(".price");

      if (qty.value > 1) {
        qty.value--;
        price.setAttribute(
          "data-total",
          qty.value * price.getAttribute("data-price")
        );
        price.textContent = `${price.getAttribute("data-total")} azn`;

        total = 0;
        allPrice.forEach((item) => {
          total += Number(item.getAttribute("data-total"));
          fullTotal.textContent = `${total} AZN`;

          fullTotalDiscount.textContent = `${total - discount.getAttribute("data-discount")
          } AZN`;
        });
      }
    });
  });

  increment.forEach((item) => {
    item.addEventListener("click", (e) => {
      const parent = e.target.closest(".order__card-count"),
        qty = parent.querySelector(".qty"),
        price = parent.querySelector(".price");

      qty.value++;
      price.setAttribute(
        "data-total",
        qty.value * price.getAttribute("data-price")
      );
      price.textContent = `${price.getAttribute("data-total")} azn`;

      total = 0;
      allPrice.forEach((item) => {
        total += Number(item.getAttribute("data-total"));
        fullTotal.textContent = `${total} AZN`;

        fullTotalDiscount.textContent = `${
            total - discount.getAttribute("data-discount")
          } AZN`;
      });
    });
  });
});

//product detail

window.addEventListener("DOMContentLoaded", () => {
  const dec = document.querySelector(".order__card-count-inc"),
    inc = document.querySelector(".order__card-count-dec");

  let price = document.querySelectorAll(".price");
  price.forEach(
    (item) => (item.textContent = `${item.getAttribute("data-price")} azn`)
  );

  if (dec) {
    dec.addEventListener("click", (e) => {
      (qty = document.querySelector(".qty")),
        (price = document.querySelector(".price"));
      // console.log(price);

      if (qty.value > 1) {
        qty.value--;
        price.setAttribute(
          "data-total",
          qty.value * price.getAttribute("data-price")
        );
        price.textContent = `${price.getAttribute("data-total")} azn`;
      }
    });
  }

  if (inc) {
    inc.addEventListener("click", (e) => {
      (qty = document.querySelector(".qty")),
        (price = document.querySelector(".price"));

      qty.value++;
      price.setAttribute(
        "data-total",
        qty.value * price.getAttribute("data-price")
      );
      price.textContent = `${price.getAttribute("data-total")} azn`;
    });
  }
});

///Map
const myStyles = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#f5f5f5",
      },
    ],
  },
  {
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#f5f5f5",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#bdbdbd",
      },
    ],
  },
  {
    featureType: "administrative.neighborhood",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#eeeeee",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#e5e5e5",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#ffffff",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#dadada",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
  {
    featureType: "transit.line",
    elementType: "geometry",
    stylers: [
      {
        color: "#e5e5e5",
      },
    ],
  },
  {
    featureType: "transit.station",
    elementType: "geometry",
    stylers: [
      {
        color: "#eeeeee",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#c9c9c9",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
];
const iconBase = "../../assets/images/";
const icons = {
  parking: {
    icon: iconBase + "pin.svg",
  },
  library: {
    icon: iconBase + "pin.svg",
  },
  info: {
    icon: iconBase + "pin.svg",
  },
};

const uluru = { lat: -25.344, lng: 131.031 };
const zoom = 6;

var mapOptions = { center: uluru, zoom: zoom, disableDefaultUI: true };
mapOptions.styles = myStyles; // here we apply the styles we just made

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), mapOptions);
  const features = [
    {
      position: new google.maps.LatLng(-25.91721, 131.2263),
      type: "info",
    },
    {
      position: new google.maps.LatLng(-26.91539, 132.2282),
      type: "info",
    },
    {
      position: new google.maps.LatLng(-27.91747, 130.22912),
      type: "info",
    },
    {
      position: new google.maps.LatLng(-30.9191, 129.22907),
      type: "info",
    },
    {
      position: new google.maps.LatLng(-33.91725, 151.23011),
      type: "info",
    },
    {
      position: new google.maps.LatLng(-33.91872, 151.23089),
      type: "info",
    },
    {
      position: new google.maps.LatLng(-33.91784, 151.23094),
      type: "info",
    },
    {
      position: new google.maps.LatLng(-33.91682, 151.23149),
      type: "info",
    },
    {
      position: new google.maps.LatLng(-33.9179, 151.23463),
      type: "info",
    },
    {
      position: new google.maps.LatLng(-33.91666, 151.23468),
      type: "info",
    },
    {
      position: new google.maps.LatLng(-33.916988, 151.23364),
      type: "info",
    },
    {
      position: new google.maps.LatLng(-33.91662347903106, 151.22879464019775),
      type: "parking",
    },
    {
      position: new google.maps.LatLng(-33.916365282092855, 151.22937399734496),
      type: "parking",
    },
    {
      position: new google.maps.LatLng(-33.91665018901448, 151.2282474695587),
      type: "parking",
    },
    {
      position: new google.maps.LatLng(-33.919543720969806, 151.23112279762267),
      type: "parking",
    },
    {
      position: new google.maps.LatLng(-33.91608037421864, 151.23288232673644),
      type: "parking",
    },
    {
      position: new google.maps.LatLng(-33.91851096391805, 151.2344058214569),
      type: "parking",
    },
    {
      position: new google.maps.LatLng(-33.91818154739766, 151.2346203981781),
      type: "parking",
    },
    {
      position: new google.maps.LatLng(-33.91727341958453, 151.23348314155578),
      type: "library",
    },
  ];

  for (let i = 0; i < features.length; i++) {
    new google.maps.Marker({
      position: features[i].position,
      icon: icons[features[i].type].icon,
      map: map,
    });
  }
}

window.initMap = initMap;
