export const closeModal = (projectId: string) => {
    $('#' + projectId + 'Modal').modal('toggle');
    $('.modal-backdrop').css('opacity', 0);
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
}

export const openModal = (projectId: string) => {
    $('#' + projectId + 'Modal').modal('toggle');

    $('.modal-backdrop').css('opacity', 0.5);

    $('.carousel-control.left').click(function () {
        $('.projectCarousel').carousel('prev');
    });
    $('.carousel-control.right').click(function () {
        $('.projectCarousel').carousel('next');
    });

    $('.carousel-indicators li').on('click', function () {
        $('.projectCarousel').carousel($(this).index());
    });
}