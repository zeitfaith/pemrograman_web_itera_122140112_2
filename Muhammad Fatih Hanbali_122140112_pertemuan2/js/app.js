import ScheduleManager from './schedule.js';

const scheduleManager = new ScheduleManager();
const scheduleListElement = document.getElementById('schedule-list');
const addClassButton = document.getElementById('add-class-btn');
const modalSection = document.getElementById('modal-section');
const closeModalButton = document.querySelector('.close-button');
const classForm = document.getElementById('class-form');
const classIdInput = document.getElementById('class-id');
const namaKelasInput = document.getElementById('nama-kelas');
const hariSelect = document.getElementById('hari');
const waktuMulaiInput = document.getElementById('waktu-mulai');
const waktuSelesaiInput = document.getElementById('waktu-selesai');

const renderClassItem = (kelas) => {
    return `
        <div class="class-item" data-id="${kelas.id}">
            <div class="class-info">
                <p><strong>${kelas.nama}</strong></p>
                <p>${kelas.hari}, ${kelas.waktuMulai} - ${kelas.waktuSelesai}</p>
            </div>
            <div class="class-actions">
                <button class="edit-btn" data-id="${kelas.id}">Edit</button>
                <button class="delete-btn" data-id="${kelas.id}">Hapus</button>
            </div>
        </div>
    `;
};

const renderScheduleList = (schedule) => {
    scheduleListElement.innerHTML = schedule.map(renderClassItem).join('');
    addEditAndDeleteEventListeners();
};

const simulateAsyncSave = async (data) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(data);
        }, 10);
    });
};

const clearModalForm = () => {
    classIdInput.value = '';
    namaKelasInput.value = '';
    hariSelect.value = 'Senin';
    waktuMulaiInput.value = '';
    waktuSelesaiInput.value = '';
};

const openModal = (kelas = null) => {
    clearModalForm();
    if (kelas) {
        classIdInput.value = kelas.id;
        namaKelasInput.value = kelas.nama;
        hariSelect.value = kelas.hari;
        waktuMulaiInput.value = kelas.waktuMulai;
        waktuSelesaiInput.value = kelas.waktuSelesai;
    }
    modalSection.style.display = 'block';
};

const closeModal = () => {
    modalSection.style.display = 'none';
};

const handleFormSubmit = async (event) => {
    event.preventDefault();
    const id = classIdInput.value;
    const nama = namaKelasInput.value;
    const hari = hariSelect.value;
    const waktuMulai = waktuMulaiInput.value;
    const waktuSelesai = waktuSelesaiInput.value;

    const newClassData = { nama, hari, waktuMulai, waktuSelesai };

    let updatedSchedule;
    if (id) {
        updatedSchedule = scheduleManager.updateClass(id, newClassData);
    } else {
        updatedSchedule = scheduleManager.addClass(newClassData);
    }

    if (updatedSchedule) {
        await simulateAsyncSave(updatedSchedule);
        renderScheduleList(updatedSchedule);
        closeModal();
    } else {
        alert('Gagal menyimpan kelas.');
    }
};

const handleEditClick = (id) => {
    const kelasToEdit = scheduleManager.getSchedule().find(kelas => kelas.id === parseInt(id));
    if (kelasToEdit) {
        openModal(kelasToEdit);
    }
};

const handleDeleteClick = async (id) => {
    if (confirm('Apakah Anda yakin ingin menghapus kelas ini?')) {
        const updatedSchedule = scheduleManager.deleteClass(id);
        await simulateAsyncSave(updatedSchedule);
        renderScheduleList(updatedSchedule);
    }
};

const addEditAndDeleteEventListeners = () => {
    document.querySelectorAll('.edit-btn').forEach(button => {
        button.addEventListener('click', () => handleEditClick(button.dataset.id));
    });
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', () => handleDeleteClick(button.dataset.id));
    });
};

addClassButton.addEventListener('click', () => openModal());
closeModalButton.addEventListener('click', closeModal);
classForm.addEventListener('submit', handleFormSubmit);

// Initial render
renderScheduleList(scheduleManager.getSchedule());