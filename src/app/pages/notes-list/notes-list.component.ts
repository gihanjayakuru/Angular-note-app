import { NotesService } from 'src/app/shared/notes.service';
import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/shared/note.model';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  notes: Note[] = new Array<Note>();

  constructor( private noteService: NotesService) {}

  ngOnInit(): void {
    //retrieve all notes
    this.notes = this.noteService.getAll();
  }

  deleteNote(id: number){
    // Delete the note using the service
    this.noteService.delete(id);
    // Remove the note from the local array
    this.notes.splice(id, 1);
  }

}
