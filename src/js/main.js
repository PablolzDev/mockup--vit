
// Import our custom CSS
import '../scss/style.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'




const head = document.querySelector("header")

head.innerHTML = `<div
class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-star"
>
<a
  href="/"
  class="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
>
  <svg
    class="bi me-2"
    width="40"
    height="32"
    role="img"
    aria-label="Bootstrap"
  >
    <use xlink:href="#bootstrap" />
  </svg>
</a>

<ul
  class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center align-items-center mb-md-0 gap-1"
>
  <img
    src="https://pascualbravo.edu.co/wp-content/uploads/2023/06/cropped-Imagotipo-horizontal_acreditados.png"
    alt=""
  />
  <li><a href="../../index.html" class="nav-link px-2 link-secondary">Home</a></li>
  <li>
    <a href="./src/pages/results.html" class="nav-link px-2 link-body-emphasis">Resultados</a>
  </li>
</ul>

<div class="dropdown text-end">
  <a
    href="#"
    class="d-block link-body-emphasis text-decoration-none dropdown-toggle"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    <img
      src="https://github.com/mdo.png"
      alt="mdo"
      width="52"
      height="52"
      class="rounded-circle"
    />
  </a>
  <ul class="dropdown-menu text-small">
    <li><a class="dropdown-item" href="#">Role:: </a></li>
    <li><a class="dropdown-item" href="#">Settings</a></li>
    <li><a class="dropdown-item" href="#">Profile</a></li>
    <li><hr class="dropdown-divider" /></li>
    <li><a class="dropdown-item" href="#">Sign out</a></li>
  </ul>
</div>
</div>
`
