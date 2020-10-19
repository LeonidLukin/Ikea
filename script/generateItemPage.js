import { catalog } from "./catalog.js";
import { getData } from  "./getData.js";

const NEW_COUNT_ITEM = 6;

const generateItemPage = () => {

    const renderCard = ({ category, count, description, id, img, name: itemName, price, subcategory }) => {

    const breadCrumbLink = document.querySelectorAll('.breadcrumb__link');
    const goodImages = document.querySelector('.good-images');
    const goodItemNew = document.querySelector('.good-item__new');
    const goodItemHeadr = document.querySelector('.good-item__header');
    const goodItemItemDescription = document.querySelector('.good-item__description');
    const goodItemItemEmpty = document.querySelector('.good-item__empty');
    const goodItemItemPriceValue = document.querySelector('.good-item__price-value');
    const btnGood = document.querySelector('.btn-good');
    const btnAddWishlist = document.querySelector('.btn-add-wishlist');

    breadCrumbLink[0].textContent = category;
    breadCrumbLink[0].href = `goods.html?cat=${category}`;
    breadCrumbLink[1].textContent = subcategory;
    breadCrumbLink[1].href = `goods.html?subcat=${subcategory}`;
    breadCrumbLink[2].textContent = itemName;

        goodImages.textContent = '';
        
        goodItemHeadr.textContent = itemName;
        goodItemItemDescription.textContent = description;        
        goodItemItemPriceValue.textContent = price;
        btnGood.dataset.idd = id;
        btnAddWishlist

        img.forEach(item => {
            goodImages.insertAdjacentHTML('afterbegin', `
                <div class="good-image__item">
                    <img src="${item}" alt="${itemName} - ${description}">
                </div>
            `);
        });

        if (count >= NEW_COUNT_ITEM) {
            goodItemNew.style.display = 'block';
        } else if (!count) {
            goodItemItemEmpty.style.display = 'block';
            btnGood.style.display = 'none';
        }
    };

    if (location.hash && location.pathname.includes('card')) {
        getData.item(location.hash.substring(1), renderCard);
    }
};

export default generateItemPage;