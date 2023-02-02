import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { Role } from '../../../@entities/character/character';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-role-list',
    template: `
        <div class="grid grid-rows-2 text-primary focus-within:text-secondary">
            <label *ngIf="id && label" [for]="id">
                <app-translator [key]="label" />
            </label>
            <select
                [id]="id ?? ''"
                class="bg-primary-dark border-2 border-primary px-2 outline-none focus:border-secondary"
                [ngModel]="input"
                (ngModelChange)="onChange($event)"
                (blur)="onTouched()"
            >
                <option class="bg-primary-dark" value=""></option>
                <option
                    class="bg-primary-dark"
                    *ngFor="let role of roles"
                    [ngValue]="role.value"
                >
                    <app-translator [key]="role.text" />
                </option>
            </select>
        </div>
    `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => RoleListComponent),
            multi: true,
        },
    ],
})
export class RoleListComponent implements ControlValueAccessor, OnInit {
    @Input() id?: string;
    @Input() label?: string;
    input = '';
    roles: { value: Role; text: string }[] = [];
    onChange: any;
    onTouched: any;

    ngOnInit(): void {
        this.roles = Object.values(Role).map((role) => ({
            value: role,
            text: this.translate(role),
        }));
    }

    registerOnChange(fn: any) {
        this.onChange = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouched = fn;
    }

    writeValue(input: string) {
        this.input = input;
    }

    private translate(role: Role): string {
        switch (role) {
            case Role.Rockerboy:
                return $localize`:@@role.rockerboy:Rockerboy`;
            case Role.Solo:
                return $localize`:@@role.solo:Solo`;
            case Role.Netrunner:
                return $localize`:@@role.netrunner:Netrunner`;
            case Role.Techie:
                return $localize`:@@role.techie:Techie`;
            case Role.Medtech:
                return $localize`:@@role.medtech:Medtech`;
            case Role.Media:
                return $localize`:@@role.media:Media`;
            case Role.Corporate:
                return $localize`:@@role.corporate:Corporate`;
            case Role.Cop:
                return $localize`:@@role.cop:Cop`;
            case Role.Fixer:
                return $localize`:@@role.fixer:Fixer`;
            case Role.Nomad:
                return $localize`:@@role.nomad:Nomad`;
        }
    }
}
