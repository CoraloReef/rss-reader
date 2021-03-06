import _ from 'lodash';
import i18next from 'i18next';

const rssRender = (rssData) => {
  const id = _.uniqueId();
  const {
    link,
    itemTitle,
    itemDescription,
  } = rssData;
  return `
    <div class="col-12 col-sm-4">
      <div class="card mb-2">
        <div class="card-body text-center">
          <h5 class="card-title"><a href="${link}">${itemTitle}</a></h5>
          <p><a href="#" class="btn btn-secondary" data-toggle="modal" data-target="#modal${id}">Description</a></p>
        </div>
      </div>
      <div class="modal fade" id="modal${id}" tabindex="-1" role="dialog" aria-labelledby="modalWindow" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalWindowLabel${id}">
                ${itemTitle}
              </h5>
              <button class="close" type="button" data-dismiss="modal" aria-label="close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              ${itemDescription}
            </div>
          </div>
        </div>
      </div>
    </div>`;
};

export const notifyRender = (notifyStatus) => {
  const blockNotify = document.querySelector('#notify');
  blockNotify.innerHTML = `
    <div class="alert alert-${i18next.t(`${notifyStatus}.type`)} alert-dismissible fade show" role="alert">
      ${i18next.t(`${notifyStatus}.text`)}
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  `;
};

export const rssListRender = (rss) => {
  const rssDiv = document.querySelector('#rss-list');
  rssDiv.innerHTML = rss.map(rssRender).join('');
};
